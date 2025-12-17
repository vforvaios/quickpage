import AboutUs from "./sections/AboutUs";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

export const sectionRegistry: Record<string, React.FC<any>> = {
  HEADER: Header,
  HEROBANNERS: Hero,
  ABOUTUS: AboutUs,
  GALLERY: Gallery,
  FOOTER: Footer,
};
