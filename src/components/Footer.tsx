import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";
import H3 from "./ui/H3";
import Text from "./ui/Text";
import A from "./ui/A";

export default function Footer() {
  return (
    <section>
      <div>
        <div className="flex  justify-between">
          <H3>Let’s connect</H3>
          <div className="flex gap-[2rem]">
            <A href="mailto:adaobegginer@gmail.com" target="blank">
              <Button variant="black">
                <Mail></Mail>
              </Button>
            </A>
            <A href="https://github.com/Adao-Angelo" target="blank">
              <Button variant="black">
                <Github></Github>
              </Button>
            </A>
            <A
              href="https://www.linkedin.com/in/ad%C3%A3o-%C3%A2ngelo-jo%C3%A3o-238233335/"
              target="blank"
            >
              <Button variant="black">
                <Linkedin></Linkedin>
              </Button>
            </A>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[2.7rem] mb-[10.7rem]">
          <Text>
            Shoot me email to chat about my work or just like to say hey 👋
          </Text>
          <A href="#">
            <Text _className="flex items-center gap-[1rem]">
              <span>Back to top </span>
              <ArrowUp></ArrowUp>
            </Text>
          </A>
        </div>
        <div className="flex justify-center">
          <Text _className="text-neutral-600">
            © Designed by Nigar Safarova 💜
          </Text>
        </div>
      </div>
    </section>
  );
}
