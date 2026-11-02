
import Logo from "./Logo";
import Navigation from "./Navigation";

// Header med frosted glass fra starten
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md">
      {/* Logo til venstre og navigation til højre */}
      <div className="flex h-16 items-center justify-between px-10 md:px-20">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

