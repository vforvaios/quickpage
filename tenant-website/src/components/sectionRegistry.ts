import Header from "./sections/Header";
import Hero from "./sections/Hero";

export const sectionRegistry: Record<string, React.FC<any>> = {
  HEADER: Header,
  HEROBANNERS: Hero,
};
