import Logo from "./Logo";
import Navigation from "./Navigation";

// Header med logo til venstre og navigation til højre
export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-10 py-4">
      <Logo />
      <Navigation />
    </header>
  );
}
