interface HeaderProps {
  isMobile: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
import { token } from "@/models/selectors/userSelectors";
import { getTenantInfo } from "@/queries/admin";
import MenuIcon from "@mui/icons-material/Menu";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Header = ({ isMobile, setSidebarOpen }: HeaderProps) => {
  const userToken = useSelector(token);
  const { data } = useQuery({
    queryKey: ["getTenantInfo"],
    // TO BE CHANGED!!!!
    queryFn: () => getTenantInfo(1, userToken),
    enabled: !!userToken, // εκτελείται μόνο αν υπάρχει token
    retry: false,
    refetchOnWindowFocus: false,
  });

  console.log(data);

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
