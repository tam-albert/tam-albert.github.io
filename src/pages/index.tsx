import Footer from "@/components/footer";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex w-full flex-col space-y-4 mb-12 leading-relaxed">
          <div>
            Hi! I&apos;m Albert, a sophomore studying Computer Science and
            Mathematics at MIT.
          </div>
          <div>
            I&apos;m interested in building deployable machine learning systems.
            Currently, I&apos;m building generative audio models at{" "}
            <a
              href="https://phonic.co/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Phonic
            </a>
            . I&apos;ve worked on retrieval-augmented generation systems at{" "}
            <a
              href="https://inkeep.com/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inkeep
            </a>{" "}
            and researched data attribution for pretrained models with{" "}
            <a
              href="https://madrylab.mit.edu/"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aleksander Mądry&apos;s lab
            </a>{" "}
            at CSAIL. I also direct{" "}
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

          <div>
            {" "}
            My resume is linked{" "}
            <a
              href="/resume.pdf"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
