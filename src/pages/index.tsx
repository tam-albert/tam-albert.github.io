import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col space-y-12">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-6">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-black">Albert</span>. I&apos;m
            currently working on post-training at{" "}
            <a
              href="https://openai.com/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI
            </a>
            .
          </p>
          <p className="mb-6">
            Previously, I researched data attribution for segmentation models
            with{" "}
            <a
              href="https://madrylab.mit.edu/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aleksander Mądry&apos;s group
            </a>{" "}
            at CSAIL. I also worked on coding models at{" "}
            <a
              href="https://cognition.ai/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cognition
            </a>
            , voice models at{" "}
            <a
              href="https://phonic.co/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phonic
            </a>
            , image-to-video models at{" "}
            <a
              href="https://pika.art/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pika
            </a>
            , quantitative research at{" "}
            <a
              href="https://www.hudsonrivertrading.com/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              HRT
            </a>
            , and RAG systems at{" "}
            <a
              href="https://inkeep.com/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inkeep
            </a>
            .
          </p>
          <p className="mb-6">
            I also led the organizing team for{" "}
            <a
              href="https://hackmit.org/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              HackMIT
            </a>{" "}
            and{" "}
            <a
              href="https://blueprint.hackmit.org/"
              className="text-black underline decoration-dotted decoration-gray-400 underline-offset-4 hover:decoration-black hover:decoration-solid transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blueprint
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
