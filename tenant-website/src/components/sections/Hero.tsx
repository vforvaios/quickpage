import type { SectionVariant } from "@/models/types";

interface IHeroProps {
  variant: SectionVariant;
}

const Hero = ({ variant }: IHeroProps) => {
  return <div className="h-[600px] bg-red-300">Hero {variant}</div>;
};

export default Hero;
