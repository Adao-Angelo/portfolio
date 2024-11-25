import RootLayout from "./components/Layout";
import Project from "./components/Project";
import A from "./components/ui/A";
import Button from "./components/ui/Button";
import H1 from "./components/ui/H1";
import H2 from "./components/ui/H2";
import P from "./components/ui/P";

import "./config/Fonts";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <main>
      <RootLayout>
        <div className="pt-[13.8rem] pb-[14.6rem] text-center">
          <H1 _className="font-sora text-neutral-800 dark:text-neutral-50">
            Hi, I’m Adão Ângelo João.
          </H1>
          <H2 _className="mt-[3.2rem] dark:text-neutral-50 text-purple-800 dark:text-purple-300">
            Full-stack Developer
          </H2>
          <P _className="my-[3.2rem]">
            Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo
            scelerisque gravida.
          </P>

          <div className="flex gap-[2.5rem] justify-center">
            <A href="https://github.com/Adao-Angelo" target="blank">
              <Button>
                <Github></Github>
              </Button>
            </A>
            <A
              href="https://www.linkedin.com/in/ad%C3%A3o-%C3%A2ngelo-jo%C3%A3o-238233335/"
              target="blank"
            >
              <Button>
                <Linkedin></Linkedin>
              </Button>
            </A>
            <Button variant="outline">GET IN TOUCH</Button>
            <Button variant="outline">RESUME</Button>
          </div>

          <div className="m-auto mt-[12.3rem]">
            <A href="#" className="text-">
              Scroll
            </A>
            <ArrowDown className="m-auto"></ArrowDown>
          </div>

          <div>
            <H1 _className="mt-[18.1rem] mb-[11.4rem]">Projects</H1>
            <div className="text-left grid grid-cols-2 gap-[7rem]">
              <Project
                githubUrl="https://github.com/Adao-Angelo/task-management-api"
                description="🚀 A NestJS-based API developed for my portfolio, showcasing a task management system with essential features and modern practices."
                title="Task Management"
              ></Project>
              <Project
                githubUrl="https://github.com/Adao-Angelo/chat-AI"
                description="🤖 ChatBot is an advanced AI-powered chatbot built with Next.js and TypeScript, leveraging the Vercel SDK for AI integration and Google's Gemini for semantic understanding. The chatbot is designed to provide intelligent, real-time conversations while ensuring seamless user experience with Tailwind CSS for modern design."
                title="Chat AI"
                imageUrl="https://github.com/Adao-Angelo/chat-AI/blob/main/public/chat-ai.png?raw=true"
              ></Project>
              <Project
                githubUrl="https://github.com/Adao-Angelo/initials-extractor"
                description=" 🚀 Initials Extractor is a lightweight Node.js package that extracts initials from a full name. Ideal for generating user avatars, profile initials, or any other use case where name abbreviation is needed."
                title="Initials Extractor"
                demoUrl="https://www.npmjs.com/package/initials-extractor"
                imageUrl="https://raw.githubusercontent.com/Adao-Angelo/initials-extractor/refs/heads/main/assets/materialavatar.webp"
              ></Project>
              <Project
                githubUrl="https://github.com/Adao-Angelo/no-offense-backend"
                description=" 🛠️ No Offense is a project designed to automatically censor offensive words and phrases in posts, leveraging advanced context and semantic analysis to detect and suggest corrections for offensive language. The goal is to promote a healthier and more inclusive environment on communication platforms."
                title="No Offense Backend"
                demoUrl="https://no-offense-backend.onrender.com/api-docs"
              ></Project>
            </div>
          </div>

          <div className="text-left my-[15.7rem]">
            <div className="flex justify-between">
              <div className="w-[50.9rem]">
                <H2>Hi there!</H2>
                <P _className="mt-[1.9rem] mb-[3.2rem]">
                  Hello! I’m a passionate full-stack developer always looking
                  for new ways to solve problems and learn something new. I love
                  exploring different languages and tools to create efficient
                  and impactful solutions. My curiosity and determination drive
                  me to tackle challenging projects, allowing me to continuously
                  grow as a professional and as a person.
                </P>
                <P _className="mb-[3.2rem]">
                  Beyond development, I enjoy sharing knowledge and
                  collaborating with teams to achieve outstanding results. With
                  a focus on details and performance, I’m always ready to face
                  challenges and contribute to building products that make a
                  difference. Let’s turn ideas into reality!
                </P>

                <A href="/about">
                  <Button>READ MORE</Button>
                </A>
              </div>
              <aside>
                <img
                  className="w-[36.9rem]"
                  src="/me.jpeg"
                  alt="About me Image."
                />
              </aside>
            </div>
          </div>
        </div>
      </RootLayout>
    </main>
  );
}
