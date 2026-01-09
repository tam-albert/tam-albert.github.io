import Layout from "@/components/layout";
import Project from "@/components/project";
import { Space_Mono } from "next/font/google";
import { FaFileAlt, FaGithub } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";

const mono = Space_Mono({ subsets: ["latin"], weight: "700" });

export default function Projects() {
  const projects = [
    {
      title: "Data Attribution for Segmentation Models",
      links: [
        { Icon: FaFileAlt, link: "https://openreview.net/forum?id=13VkFDTKHH" },
      ],
      text: (
        <>
          <div className="mb-2">
            Investigated data attribution for pretrained image segmentation
            models. By extending{" "}
            <a
              href="https://trak.csail.mit.edu/"
              className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
              target="_blank"
            >
              TRAK
            </a>
            , we can curate a subset of training images from{" "}
            <a
              href="https://cocodataset.org/#home"
              className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
              target="_blank"
            >
              large image datasets
            </a>{" "}
            that&apos;s up to 3x smaller that improves model performance, and
            identify mislabeled examples in training data.
          </div>
          <div>Presented at NeurIPS ATTRIB Workshop 2023.</div>
        </>
      ),
    },
    {
      title:
        "Affine Transformations for Outlier-Resilient Post-Training Quantization on Diffusion Transformers",
      links: [
        {
          Icon: FaGithub,
          link: "https://github.com/tam-albert/fq-diffusion/tree/main",
        },
      ],
      text: (
        <>
          Final project for{" "}
          <a
            href="https://hanlab.mit.edu/courses/2024-fall-65940"
            className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
            target="_blank"
          >
            6.5940 (Efficient Deep Learning Computing)
          </a>
          , Fall 2024 at MIT. We adapted{" "}
          <a
            href="https://arxiv.org/abs/2410.09426"
            className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
            target="_blank"
          >
            FlatQuant
          </a>
          , a post-training quantization method for LLMs which learns affine
          transformations to mitigate outliers weights and activations, for
          diffusion transformers. We achieved comparable results on key image
          quality metrics (FID, CLIP score, LPIPS) when quantizing from fp16 to
          w8a8/w6a6.
        </>
      ),
    },
    {
      title: "Guidance for Diffusion Language Models",
      links: [{ Icon: FaCircleInfo, link: "/diffusion-guidance/index.html" }],
      text: (
        <>
          Final project for{" "}
          <a
            href="https://phillipi.github.io/6.7960/"
            className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
            target="_blank"
          >
            6.7960 (Deep Learning)
          </a>
          , Fall 2024 at MIT. We explored training-free guidance methods for
          discrete diffusion language models, adapting ideas from both diffusion
          (
          <a
            href="https://arxiv.org/abs/2406.02507"
            className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
            target="_blank"
          >
            autoguidance
          </a>
          ) and language modeling (
          <a
            href="https://arxiv.org/abs/2210.15097"
            className="text-black underline underline-offset-4 hover:text-gray-800 transition-colors"
            target="_blank"
          >
            contrastive decoding
          </a>
          ) to improve generation quality. We achieved improvements in
          perplexity over baseline diffusion LMs on WikiText2, without any
          additional training.
        </>
      ),
    },
    {
      title: <span className={`${mono.className}`}>zyzx</span>,
      links: [
        { Icon: FaGithub, link: "https://github.com/tam-albert/zyzx" },
        { Icon: FaCircleInfo, link: "https://zyzx.azliu.cc/" },
      ],
      text: "A natural language shell built in Zig, using a custom Mixtral 8x7B model fine-tuned on bash commands. Built at TreeHacks 2024.",
    },
    {
      title: "Sakhi",
      links: [
        { Icon: FaGithub, link: "https://github.com/tam-albert/sakhi" },
        {
          Icon: SiDevpost,
          link: "https://devpost.com/software/pal-personal-ai",
        },
      ],
      text: "A language learning tool built around practicing natural conversations with a chatbot, which can be personalized to any scenario. Built at LAHacks 2023.",
    },
    {
      title: "StitchIt",
      links: [
        { Icon: FaGithub, link: "https://github.com/tam-albert/stitchit" },
      ],
      text: "A collaborative journaling app you can use to compile memories with your friends, supporting text, images, and audio. Built for web.lab 2023.",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-10">
          {projects.map((project, index) => (
            <div key={`project-${index}`}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
