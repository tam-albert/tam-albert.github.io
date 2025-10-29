import Footer from "@/components/footer";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex w-full flex-col space-y-4 mb-12 leading-relaxed">
          <div>
            Hi! I&apos;m Albert, a senior studying Computer Science and
            Mathematics at MIT. Right now, I&apos;m post-training{" "}
            <a
              href="https://cognition.ai/blog/swe-grep"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              better coding agents
            </a>{" "}
            at{" "}
            <a
              href="https://www.hudsonrivertrading.com/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cognition
            </a>
            .
          </div>
          <div>
            I&apos;m interested in building deployable machine learning systems.
            In the past, I&apos;ve done quantitative research at{" "}
            <a
              href="https://www.hudsonrivertrading.com/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              HRT
            </a>
            , tinkered with video models at{" "}
            <a
              href="https://pika.art/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pika
            </a>
            , built generative audio models at{" "}
            <a
              href="https://phonic.co/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phonic
            </a>
            , worked on retrieval-augmented generation systems at{" "}
            <a
              href="https://inkeep.com/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inkeep
            </a>
            , and researched data attribution for pretrained models with{" "}
            <a
              href="https://madrylab.mit.edu/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aleksander Mądry&apos;s lab
            </a>{" "}
            at CSAIL.
          </div>
          <div>
            I also directed{" "}
            <a
              href="https://hackmit.org/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackMIT
            </a>{" "}
            and{" "}
            <a
              href="https://blueprint.hackmit.org/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blueprint
            </a>
            , two annual hackathons at MIT.
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
