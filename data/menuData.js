const MenuLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Inventory",
    href: "",
    subLinks: [
      {
        title: "All Inventory",
        href: "/cars",
      },
      {
        title: "CarFinder Search",
        href: "/forms/car-finder",
      },
      {
        title: "Trade-In Appraisal",
        href: "/forms/value-your-trade",
      },
    ],
  },
  {
    title: "Finance Department",
    href: "",
    subLinks: [
      {
        title: "Financing",
        href: "/finance",
      },
      {
        title: "Car Loan Calculator",
        href: "/forms/finance/calculator",
      },
      {
        title: "Apply For Credit",
        href: "/forms/finance",
      },
    ],
  },
  {
    title: "CarFinder",
    href: "/forms/car-finder",

  },
  {
    title: "Dealership",
    href: "",
    subLinks: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Contact Us",
        href: "/forms/contact-us",
      },
      {
        title: "Directions",
        href: "/directions",
      },
      {
        title: "Book Appointment",
        href: "/forms/book-appointment",
      },
    ],
  },
  {
    title: "Text Us Now",
    href: "/forms/text-us-now",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
];

export default MenuLinks;
