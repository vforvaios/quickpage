export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Your Company</p>
        <nav className="mt-2 sm:mt-0 flex gap-4">
          <a href="#" className="hover:text-gray-900 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Terms
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
