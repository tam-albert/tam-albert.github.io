---
title: DeepSeekMath-V2
date: 2025-12-07
excerpt: https://arxiv.org/pdf/2511.22570v1
tags:
  - paper-notes
---
Paper came out **Nov 2025.**
## Takeaways
- In math, training verifiers is great for training better generators, enabling generators to self-refine, and directly refining generators at test-time (in the high-compute setting).
- Training meta-verifiers ensures that verifiers surface real issues (instead of just correct scores), which is necessary for refining proofs at test time.
- Meta-verifiers also enable us to surface hard-to-verify proofs to manually annotate, which improves data quality for iteratively training the generator and verifier.
- Training natural-language math proof models is still quite human-intensive (in terms of annotation effort).
## Motivation
- Lots of work has been done on getting models to be good at math with easily verifiable, final answer reward (AIME-type problems, solving IMO problems with Lean)
- **2025 has been about getting reasoning models to produce correct natural-language mathematical proofs.**
	- Google and OpenAI did this and got gold medals at the 2025 IMO.
	- This is DeepSeek's attempt to do that.
- Beyond training models to be able to generate natural-language proofs (a new class of problems), they notice that some models—despite getting the final answer correct—may generate flawed proofs.
	- I didn’t know this was happening but apparently happens even with [IMO-Gold models.](https://epoch.ai/blog/deep-think-math#deep-think-did-well-on-the-2025-imo-but-failed-to-solve-two-older-imo-problems-requiring-more-creative-and-intricate-proofs)

DeepSeek plans to solve this by training LLMs to verify natural-language math proofs, without access to reference solutions. This is feasible, because humans can verify without rubrics or reference solutions. And with a good verifier, you can train proof generators to verify their own proofs and then refine them.
## Cold-start training

### Verifier
- **Task:** given an input problem and input proof, describe any issues with the proof and produce a score (0/0.5/1) for whether the proof is logically sound and correct
- **Base model:** DeepSeek-V3.2-Exp-SFT, SFT’d on math/code reasoning data
- **Cold-start data:** to begin training the verifier, they gather 17K problems from AoPS; generate some candidate proofs using DeepSeek-V3.2-Exp-Thinking; and ask humans to label a subset of these proofs.
- **Reward:** they assign a reward to the verifier depending on the distance between the predicted score and ground-truth score, and also enforce a format reward (entire reward is 0 if format is wrong).
### Meta-verifier
This is IMO the most interesting part of the paper.
- The verifier may produce scores without actually identifying the correct issues, since the verifier is only supervised based on its final score.
- But if we want to use the verifier to improve proof generation quality, we need a verifier that actually produces the correct issues (for the generator to improve from).
- They notice that supervising the outcome isn’t enough (?) to ensure that the identified issues are real issues.
Thus, they train a **meta-verifier** to verify the verifier’s outputs and ensure that the issues identified by the verifier are accurate and justified.

This training is very similar to training the verifier, as they also sample verifier responses and gather human annotations for them (0/0.5/1), and they initialize the meta-verifier from the initial verifier.

With a trained meta-verifier, they train a new verifier.
- New verifier is trained on verification *and* meta-verification dataset
- For each verification rollout, run it through the meta-verifier and multiply the reward of 0 to the verifier by the meta-verifier’s score.

This new verifier maintains its performance on the original verification task (proof score prediction) while improving (0.85 → 0.96) on the meta-verification task on a held-out set.

(Q: why use 0/0.5/1 for the meta-verifier’s task? in particular, if the meta-verifier assigns a score of 0.5, then the verifier made a mistake, but it still gets half-reward—do you not want to penalize this more?)

(note: meta-verifier nit but the meta-verifier prompt in Appendix A.3 seems very focused on "false positive issues." there seems to be nothing in the meta-verifier's prompt that tells the meta-verifier to assign a bad score if the verifier assigned a score of 1 when the proof should have received a 0.5—this comes purely from the reward. perhaps this didn't matter cuz it didn't pop up in practice?)

(note: the improvement on the meta-verification validation set is kind of modest. but there is probably a correlation with problem difficulty; harder problems are harder to verify correctly)
## Training the generator
### Inner loop
With a single verifier trained on the verification and meta-verification tasks, they can now boost the generator’s capabilities:
- Sample a proof from the generator.
- Use the verifier to identify issues.
- Tell the generator about these issues, and ask it to refine its proof.
The eventual goal is to do this with a single model, so they choose to "distill" the verifier's capabilities into the verifier.

The generator is pretty bad at verification out of the box. So, they need to train the generator.

In particular, they train a generator to output proofs *and* a self-analysis of the prompt. To train these at the same time, their reward is a weighted average of (1) the score that the verifier assigns to the prompt and (2) the score that the meta-verifier assigns to the self-analysis.
- This is where training the verifier from meta-verification feedback matters: without the meta-verifier, the self-analysis could easily surface the wrong issues, and the generator would fail to improve that way.
### Outer loop
Hopefully, after training the generator based on verifier and meta-verifier scores, it stops producing proofs that are obviously wrong to the verifier and produces more proofs that are either correct or hard to verify. These hard-to-verify proofs can be used to train the verifier more!

They *could* sample a bunch of generator responses and gather human annotations (0/0.5/1) for these responses, but this is expensive. So they need some way to isolate proofs that are hard to verify (for the verifier), so that they only send these proofs to humans to label.

They describe a scheme in the paper. My interpretation of how this scheme came about is as follows.

They use multiple verification samples as a proxy for "ease of verification"/"confidence" in the verifier's score. A starting scheme might be:
- If we run the verifier on a proof enough times, and they all say the proof is correct, then we can probably say that the proof is correct.
- If most of the verifier responses say the proof is incorrect, then we can probably say the proof is incorrect.
- If 1 or 2 of the verifier responses say the proof is incorrect, then it's kind of suspicious: we should give it to a human to look at.
But there's an issue: what if most of the verifier responses say the proof is incorrect, but all for different reasons? They can't all be right, so we probably shouldn't immediately label the proof with a 0 or 0.5. We know this happens, since that's a big part of why they needed to train a meta-verifier. So:
- For verifier responses that say the proof is incorrect, run a meta-verifier on their responses. If a majority of these meta-verifier responses validate the verifier response, then the proof is probably incorrect.
	- Otherwise, give it to a human to look at.

With this, they can train as follows:
1. train the verifier
2. initialize the generator from the verifier and train to produce (proof, self-analysis)
3. initialize the verifier from some checkpoint that is good at generating and verifying
	1. perhaps SFT from the generator checkpoint on high-quality verification traces?

They note that after enough generator-verifier training loops, they no longer need to use human judgments by the end (pretty cool!).

(note: doesn't this just mean that their iterative improvement scheme has saturated? this could just mean that you reached an equilibrium where the )
## Results
- In the one-shot proof generation setting, they outperform Gemini 2.5 Deep Think and GPT-5 (high) on some Chinese olympiad problems. (Fig. 1)
- In the iterative refinement setting (where they use the self-analysis output by the generator to improve the next proof), proof score indeed scales with # of refinement steps on IMO shortlist problems. (Fig. 2)
	- They measure pass@1 and "best@32" (where the proof is selected based on the best self-analysis score)
	- Pass@1 improves, but so does best@32. This means that the refinement is doing more than independently sampling at each step and taking the "better" proof.
	- Best@32 > pass@1, suggesting that the generator's self-analysis score is useful signal.
- To squeeze out the most performance, they use the verifier at test-time and scale its compute as well. In particular, they use the iterative refinement scheme again, except they directly use the verifier to output issues for the generator to improve on. They also generate many proof candidates and many verification analyses per proof candidate, which makes sense.
	- This scheme gets gold on IMO 2025 and 118/120 on Putnam 2024.
	- They say that for the problems that didn't get solved, the self-analysis was correct—this suggests that having verification capabilities was still useful here.

(note: I kind of wish they reported what would happen if they didn't use meta-verifiers at all. how much did that help?)