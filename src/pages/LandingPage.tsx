import HeroSection from './HeroSection.tsx';

function LandingPage() {
  return (
    <>
      <div className="absolute top-0 left-0 z-20 w-full bg-black/70 py-2 text-center backdrop-blur-md">
        <p className="font-body text-xs tracking-wide text-gray-200 sm:text-sm">
          Website in progress - the journey is unfolding
        </p>
      </div>
      <HeroSection />
    </>
  );
}

export default LandingPage;
