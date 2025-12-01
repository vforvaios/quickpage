import type { SectionVariant } from "@/models/types";

interface IHeroProps {
  variant: SectionVariant;
}

const Hero = ({ variant }: IHeroProps) => {
  return <div>Hero {variant}</div>;
};

export default Hero;
