import Logo from "./Logo";
import Navigation from "./Navigation";

// Header med logo til venstre og navigation til højre
export default function Header() {
  return (
  <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white/20 px-6 py-4 backdrop-blur-xl">
      <Logo />
      <Navigation />
    </header>
  );
}
