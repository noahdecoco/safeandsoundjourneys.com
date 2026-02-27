import landingBg from '../landing-background.jpg';
import logo from '../logo.svg';
import NewsletterForm from '../components/NewsletterForm.tsx';
import { FaYoutube, FaInstagram, FaSpotify } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs filter"
        style={{ backgroundImage: `url(${landingBg})` }}
      ></div>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <img
            src={logo}
            alt="Logo"
            className="m-auto mb-8 size-32 sm:mb-10 sm:size-38 md:mb-12 md:size-44"
          />

          <h1 className="font-heading fon-bold mb-6 text-4xl text-white sm:text-5xl md:text-6xl">
            Safe & Sound Journeys
          </h1>
          <p className="font-body text-lg text-gray-200 sm:text-xl md:text-2xl">
            Guided inner journeys with live music, magic truffles and&nbsp;mindful&nbsp;presence
          </p>

          <NewsletterForm />

          <div className="mt-8 flex justify-center gap-6 text-2xl text-white">
            <a href="https://www.youtube.com/@safe-and-sound-journeys" target="_blank">
              <FaYoutube className="transition hover:text-red-500" />
            </a>

            <a href="https://www.instagram.com/safeandsoundjourneys/" target="_blank">
              <FaInstagram className="transition hover:text-pink-400" />
            </a>

            <a
              href="https://open.spotify.com/artist/5p3IIXsYQPHxCrtggdRAJ6?si=w7RbvWvuRZiEhpGuOyxHTA"
              target="_blank"
            >
              <FaSpotify className="transition hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
