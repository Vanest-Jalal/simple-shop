
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-8 py-12">

        {/* Footerens fire kolonner */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-6">

          {/* Logo og sociale medier */}
          <div>

            {/* BeautyShop logo */}
            <p className="!text-3xl !font-bold tracking-tight">
              BeautyShop
            </p>

            
            <div className="mt-5">
              {/* Tekst over ikonerne */}
             <p className="mb-2 !text-lg !font-semibold text-white">
                 Følg os på
                 </p>

              {/* fake sociale medier ikoner */}
              <div className="flex items-center gap-3">

                
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <FaInstagram size={21} />
                </span>

                {/* Twitter */}
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <FaTwitter size={21} />
                </span>

                {/* TikTok */}
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <FaTiktok size={21} />
                </span>

              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-3 !text-lg !font-semibold">
              Kundeservice
            </h2>

            <ul className="space-y-1.5 text-sm text-white/75">
              <li>Kontakt os</li>
              <li>Ofte stillede spørgsmål</li>
              <li>Levering & retur</li>
              <li>Reklamation</li>
              <li>Track din ordre</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 !text-lg !font-semibold">
              Information
            </h2>

            <ul className="space-y-1.5 text-sm text-white/75">
              <li>Handelsbetingelser</li>
              <li>Privatlivspolitik</li>
              <li>Cookies</li>
              <li>Sikker betaling</li>
              <li>Betalingsmuligheder</li>
            </ul>
          </div>

          {/* Om BeautyShop */}
          <div>
            <h2 className="mb-3 !text-lg !font-semibold">
              Om BeautyShop
            </h2>

            <ul className="space-y-1.5 text-sm text-white/75">
              <li>Om os</li>
              <li>Vores værdier</li>
              <li>Karriere</li>
              <li>Vores mission</li>
              <li>Samarbejd med os</li>
            </ul>
          </div>

        </div>

        <p className="mt-16 text-center !text-sm text-white/50">
          © 2026 BeautyShop. Alle rettigheder forbeholdes.
        </p>

      </div>
    </footer>
  );
}
















