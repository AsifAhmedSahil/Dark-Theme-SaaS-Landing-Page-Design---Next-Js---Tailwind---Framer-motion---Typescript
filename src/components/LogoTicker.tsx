import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container ">
        
        <h2 className="text-xl text-center  text-white/70">Trusted by the {"world's"} most innovative teams</h2>
        
        <div className="overflow-hidden mt-8 flex justify-center">
          <div className="flex gap-16">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
