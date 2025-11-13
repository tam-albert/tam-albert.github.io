import Footer from "@/components/footer";
import Layout from "@/components/layout";
import { useState } from "react";

export default function Home() {
  const [showCitation, setShowCitation] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex w-full flex-col space-y-4 mb-12 leading-relaxed">
          <div>
            Hi! I&apos;m Albert, a senior studying Computer Science at MIT.
            Right now, I&apos;m training agents for coding at{" "}
            <a
              href="https://cognition.ai/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cognition
            </a>
            , where I&apos;ve worked on the launches of{" "}
            <a
              href="https://cognition.ai/blog/swe-grep"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              SWE-grep
            </a>{" "}
            and{" "}
            <a
              href="https://cognition.ai/blog/swe-1.5"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              SWE-1.5
            </a>
            .
          </div>
          <div>
            <p>In the past, I&apos;ve:</p>
            <ul className="list-disc list-outside ml-6">
              <li>
                researched data attribution for segmentation models with{" "}
                <a
                  href="https://madrylab.mit.edu/"
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Aleksander Mądry&apos;s group
                </a>{" "}
                at CSAIL
                <span className="relative group inline-block -ml-0.2">
                  <sup
                    className="text-blue-700 cursor-help"
                    onClick={() => setShowCitation(!showCitation)}
                  >
                    [1]
                  </sup>
                  <span
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg transition-opacity max-w-lg z-10 text-left md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible ${
                      showCitation
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                    style={{ maxWidth: "32rem", minWidth: "16rem" }}
                  >
                    Albert Tam, Josh Vendrow, & Aleksander Madry. &quot;Data
                    Attribution for Segmentation Models.&quot; NeurIPS 2023
                    Workshop on Attributing Model Behavior at Scale (2023).
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></span>
                  </span>
                </span>
                ,
              </li>
              <li>
                post-trained voice models for natural-language customizability
                at{" "}
                <a
                  href="https://phonic.co/"
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phonic
                </a>
                ,{" "}
              </li>
              <li>
                tinkered with image-to-video models at{" "}
                <a
                  href="https://pika.art/"
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pika
                </a>
                ,{" "}
              </li>
              <li>
                done quantitative research at{" "}
                <a
                  href="https://www.hudsonrivertrading.com/"
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HRT
                </a>
                , and{" "}
              </li>
              <li>
                worked on retrieval-augmented generation systems at{" "}
                <a
                  href="https://inkeep.com/"
                  className="text-blue-700 hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inkeep
                </a>
                .
              </li>
            </ul>
          </div>
          <div>
            I also led the organizing team for{" "}
            <a
              href="https://hackmit.org/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackMIT
            </a>
            , one of the largest undergraduate hackathons in the nation, and{" "}
            <a
              href="https://blueprint.hackmit.org/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blueprint,
            </a>{" "}
            a learnathon/hackathon for high schoolers.
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
