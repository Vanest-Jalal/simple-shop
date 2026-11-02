import Logo from "./Logo";
import Navigation from "./Navigation";

// Header med logo til venstre og navigation til højre
export default function Header() {
  return (
  <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-white/20 bg-white/10 px-6 py-4 shadow-sm backdrop-blur-2xl">
      <Logo />
      <Navigation />
    </header>
  );
}
