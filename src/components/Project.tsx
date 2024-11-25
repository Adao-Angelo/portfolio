import A from "./ui/A";
import Button from "./ui/Button";
import H3 from "./ui/H3";

import Text from "./ui/Text";

interface ProjectProps {
  title: string;
  imageUrl?: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
}

export default function Project({
  title,
  imageUrl,
  description,
  githubUrl,
  demoUrl,
}: ProjectProps) {
  return (
    <div className="border">
      <div className="w-full h-[30.8rem] bg-slate-100">
        <img className="h-[30.8rem] object-cover" src={imageUrl} alt="" />
      </div>
      <div className="px-[1.4rem] py-[2.4rem]">
        <H3>{title}</H3>
        <Text _className="text-neutral-600 my-[1.6rem]">{description}</Text>

        <div className="flex gap-[0.8rem]">
          <A href={githubUrl} target="blank">
            <Button>VIEW CODE</Button>
          </A>
          <A href={demoUrl ? demoUrl : "#"} target={demoUrl ? "self" : "blank"}>
            <Button variant="outline">LIVE DEMO</Button>
          </A>
        </div>
      </div>
    </div>
  );
}
