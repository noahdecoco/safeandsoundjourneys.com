import landingBg from './landing-background.jpg';
import logo from './logo.svg';
import NewsletterForm from './components/NewsletterForm.tsx';

function LandingPage() {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-xs filter"
        style={{ backgroundImage: `url(${landingBg})` }}
      ></div>

      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <img
            src={logo}
            alt="Logo"
            className="m-auto mb-8 size-32 sm:mb-10 sm:size-38 md:mb-12 md:size-44"
          />

          <h1 className="font-heading mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Safe & Sound Journeys
          </h1>
          <p className="font-body text-lg text-gray-200 sm:text-xl md:text-2xl">
            Guided psilocybin journeys with live music and mindful presence
          </p>

          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
