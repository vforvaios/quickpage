import type { SectionVariant } from "@/models/types";

interface IHeaderProps {
  variant: SectionVariant;
}
const Header = ({ variant }: IHeaderProps) => {
  return <div>Header {variant}</div>;
};

export default Header;
