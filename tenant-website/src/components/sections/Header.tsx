import headerVariants from "../variants/headerVariants";

interface IHeaderProps {
  variant?: keyof typeof headerVariants;
}

const Header = ({ variant = "simple" }: IHeaderProps) => {
  const styles = headerVariants[variant];

  return (
    <header className={`w-full top-0 z-50 ${styles.bg}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className={`text-xl font-bold ${styles.text}`}>MyWebsite</div>

        {/* Navigation */}
        <nav>
          <ul className={`flex space-x-6 font-medium ${styles.text}`}>
            <li>
              <a href="#aboutus" className={`transition ${styles.hover}`}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className={`transition ${styles.hover}`}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className={`transition ${styles.hover}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
