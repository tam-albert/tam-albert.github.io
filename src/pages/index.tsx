import Layout from "@/components/layout";
import { useState } from "react";

export default function Home() {
  const [showCitation, setShowCitation] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div className="text-lg text-gray-600 leading-relaxed">
          <p className="mb-6">
            Hi! I&apos;m <span className="font-semibold text-black">Albert</span>, a senior studying Computer Science at MIT.
          </p>
          <p>
            Right now, I&apos;m training agents for coding at{" "}
            <a
              href="https://cognition.ai/"
              className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cognition
            </a>
            , where I&apos;ve worked on the launches of{" "}
            <a
              href="https://cognition.ai/blog/swe-grep"
              className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              SWE-grep
            </a>{" "}
            and{" "}
            <a
              href="https://cognition.ai/blog/swe-1.5"
              className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              SWE-1.5
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Previously</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>
                Researched data attribution for segmentation models with{" "}
                <a
                  href="https://madrylab.mit.edu/"
                  className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aleksander Mądry&apos;s group
                </a>{" "}
                at CSAIL
                <span className="relative group inline-block ml-1 align-top">
                  <sup
                    className="cursor-help font-mono text-xs text-gray-400 hover:text-black transition-colors"
                    onClick={() => setShowCitation(!showCitation)}
                  >
                    [1]
                  </sup>
                  <span
                    className={`absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded shadow-sm w-64 z-10 ${
                      showCitation
                        ? "opacity-100 visible"
                        : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    } transition-all duration-200`}
                  >
                    Albert Tam, Josh Vendrow, & Aleksander Madry. &quot;Data
                    Attribution for Segmentation Models.&quot; NeurIPS 2023
                    Workshop on Attributing Model Behavior at Scale (2023).
                  </span>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>
                Post-trained voice models for natural-language customizability at{" "}
                <a
                  href="https://phonic.co/"
                  className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phonic
                </a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>
                Tinkered with image-to-video models at{" "}
                <a
                  href="https://pika.art/"
                  className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pika
                </a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>
                Quantitative research at{" "}
                <a
                  href="https://www.hudsonrivertrading.com/"
                  className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HRT
                </a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-gray-400">•</span>
              <span>
                Retrieval-augmented generation systems at{" "}
                <a
                  href="https://inkeep.com/"
                  className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inkeep
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
           <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Community</h2>
           <p className="text-gray-600 leading-relaxed">
            I led the organizing team for{" "}
            <a
              href="https://hackmit.org/"
              className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackMIT
            </a>
            , one of the largest undergraduate hackathons in the nation, and{" "}
            <a
              href="https://blueprint.hackmit.org/"
              className="text-black decoration-1 underline-offset-4 hover:underline transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blueprint
            </a>
            , a learnathon/hackathon for high schoolers.
          </p>
        </div>
      </div>
    </Layout>
  );
}
