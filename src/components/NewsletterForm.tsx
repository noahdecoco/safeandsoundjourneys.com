const NewsletterForm = () => {
  return (
    <div>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/safeandsoundjourneys"
        method="post"
        target="popupwindow"
        onSubmit={() => window.open('https://buttondown.com/safeandsoundjourneys', 'popupwindow')}
        className="mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-4"
      >
        <label htmlFor="bd-email" className="font-body text-sm tracking-wide text-gray-300">
          Subscribe to receive updates about journeys and events.
        </label>

        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="Enter your email"
          required
          className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-gray-300 backdrop-blur-md transition focus:ring-2 focus:ring-white/40 focus:outline-none"
        />

        <button
          type="submit"
          className="font-body rounded-full bg-white px-8 py-3 font-semibold tracking-wide text-gray-900 transition hover:bg-gray-200 active:scale-[0.98]"
        >
          Subscribe
        </button>

        <p className="text-xs text-gray-400">No spam. Just journeys.</p>
      </form>
    </div>
  );
};

export default NewsletterForm;
