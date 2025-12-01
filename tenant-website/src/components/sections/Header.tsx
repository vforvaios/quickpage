import { useState } from "react";
import headerVariants from "../variants/headerVariants";

interface IHeaderProps {
  variant?: keyof typeof headerVariants;
}

const Header = ({ variant = "simple" }: IHeaderProps) => {
  const styles = headerVariants[variant];

  const [open, setOpen] = useState(false);

  return (
    <header className={`w-full shadow-sm sticky top-0 z-50 ${styles.bg}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className={`text-xl font-bold ${styles.text}`}>MyWebsite</div>

        {/* Desktop Menu */}
        <nav className="md:flex hidden " aria-label="Main navigation">
          <ul
            className={`flex items-center space-x-6 font-medium ${styles.text}`}
          >
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

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 ${styles.text}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {/* simple icon; replace with svg if θέλεις */}
          <div className="text-2xl">{open ? "✖" : "☰"}</div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden px-6 pb-4 ${styles.text} ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-3 text-lg">
          <li>
            <a href="#aboutus" className={`block transition ${styles.hover}`}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className={`block transition ${styles.hover}`}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className={`block transition ${styles.hover}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
