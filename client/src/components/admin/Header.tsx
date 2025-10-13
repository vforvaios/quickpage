interface HeaderProps {
  isMobile: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ isMobile, setSidebarOpen }: HeaderProps) => {
  return (
    <header className="p-4 bg-white shadow flex items-center justify-between">
      {/* Κουμπί ανοίγματος ΜΟΝΟ σε mobile */}
      {isMobile && (
        <button onClick={() => setSidebarOpen(true)} className=" transition">
          <MenuIcon />
        </button>
      )}
      <h1 className="text-lg font-semibold">Πίνακας Ελέγχου</h1>
    </header>
  );
};

export default Header;
