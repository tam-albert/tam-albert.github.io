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
      title: <span className={`${mono.className}`}>zyzx</span>,
      links: [
        { Icon: FaGithub, link: "https://github.com/tam-albert/zyzx" },
        { Icon: FaCircleInfo, link: "https://zyzx.azliu.cc/" },
      ],
      text: "A natural language shell built in Zig, using a custom Mixtral 8x7B model fine-tuned on bash commands. Built at TreeHacks 2024.",
    },
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
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
            >
              TRAK
            </a>
            , we can curate a subset of training images from{" "}
            <a
              href="https://cocodataset.org/#home"
              className="text-blue-700 hover:text-blue-900"
              target="_blank"
            >
              large image datasets
            </a>{" "}
            that's up to 3x smaller that improves model performance, and
            identify mislabeled examples in training data.
          </div>
          <div>Presented at NeurIPS ATTRIB Workshop 2023.</div>
        </>
      ),
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
    // {
    //   title: "publication",
    //   //   link: "https://google.com",
    //   text: "some text",
    // },
    // {
    //   title: "sakhi",
    //   //   link: "https://google.com",
    //   text: "some text",
    // },
    // {
    //   title: "stitchit",
    //   //   link: "https://github.com/tam-albert/stitchit",
    //   text: "some text",
    // },
  ];
  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
    </Layout>
  );
}
