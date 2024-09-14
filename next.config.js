module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/active-inventory",
        destination: "/cars",
        permanent: true,
      },
      {
        source: "/vehicles",
        destination: "/cars",
        permanent: true,
      },
      {
        source: "/used-cars",
        destination: "/cars",
        permanent: true,
      },
      {
        source: "/inventory",
        destination: "/cars",
        permanent: true,
      },
      {
        source: "/sold-inventory",
        destination: "/cars/sold",
        permanent: true,
      },
      {
        source: "/featured-inventory",
        destination: "/cars/special",
        permanent: true,
      },
      {
        source: "/trade-in",
        destination: "/forms/value-your-trade",
        permanent: true,
      },
      {
        source: "/trade-in-appraisal/",
        destination: "/forms/value-your-trade",
        permanent: true,
      },
      {
        source: "/book-a-test-drive/",
        destination: "/forms/test-drive",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/forms/contact-us",
        permanent: true,
      },
      {
        source: "/make-payment",
        destination: "/payment",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/carfinder",
        destination: "/forms/car-finder",
        permanent: true,
      },
      {
        source: "/appointment",
        destination: "/forms/book-appointment",
        permanent: true,
      },
    ];
  },
};
