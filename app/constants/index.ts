export const EMAIL = "noordragon2004@gmail.com";
export const PHONE = "+20 114 583 81 87";
export const ServiceId = "service_kxdhvdb";
export const Template = "template_3i15jgb";
export const PUBLI_KEY = ""; //ضيف ال key  account settings in email js webiste !
export const LOGOPATH = "/Hollow-Knight-Background-PNG-Image.png";
export const LOGOTEXT = "NOOR";
// الشركات مثلا او التيكنولوجيز
export const TECH = [
  "/ts.svg",
  "/node.png",
  "/idhHZwYUWa.png",
  "/next.png",
  "/react.svg",
  "/tail.svg",
  "/three.svg",
  "/fm.svg",
  "/query.png",
  "/sass.webp",
  "/js.png",
];
export const MAINCOLOR = "#ff3d00";

// الخدماااااااااااات
export const SERVICES = [
  {
    title: "this is my first service",
    img: "/services-1.png.webp",
    description:
      "We create 3D models, concepts and assets for games (PC, console, mobile), game development, computer graphics for film, animation, VFX, and VR/AR apps.",
  },
  { img: "/services-3.png.webp" },
  { img: "/services-3.png.webp" },
  { img: "/services-3.png.webp" },
  { img: "/services-3.png.webp", title: "", description: "" },
];

// المشاااااااااااااااااااريع
/*
ياصورة يا صور كتير
img:"/اسم الصورة"

imgs:["/اسم الصورة",/اسم الصورة"]

*/

export interface Project {
  id: number;
  title: string;
  des?: string;
  img: string | string[];
  iconLists?: string[];
  link?: string;
  git?: string;
}
export const projects2 = [
  {
    id: 1123,
    title: `Orient | Ecommerce`,
    des: "I fully developed the front-end for this e-commerce platform as my first project at Right Mind Company. The website is designed to provide a complete shopping experience with features like caching, filtering, pagination, user data updates, order management, payment processing, and login/sign-up functionality with 2FA and forgot password support. It uses TanStack Query for caching and updating user data, with a complex mechanism for changing dates. The platform also includes blogs, wishlists, and real-time notifications using FCM. This project showcases my expertise in building a fully-featured e-commerce site.",
    img: ["/orient1.png", "/orientphone.png", "/orient2.png", "/orient3.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp", "/query.png"],
    link: "https://t1.orient-paints.com/en",
    git: "https://github.com/Noorhesham/orient",
  },
  {
    id: 155,
    title: "Dr Nurse App",
    description:
      "As part of my role at Right Mind Company, I developed the front-end for the Dr Nurse App, a platform designed for healthcare professionals and hospitals. The app allows specialists and hospitals to post job offers, with users able to apply directly. It also includes features for managing job offers, handling meeting scheduling, subscription payments, searching for people or job opportunities, and a filter search system. The app uses a point system for certain actions and rewards. The platform supports multiple languages using Next.js with NextIntl for internationalization. This project showcases my ability to build robust, feature-rich applications tailored to specific industries.",
    features: [
      "Job posting functionality for hospitals and specialists.",
      "User ability to apply for jobs and send job offers.",
      "Meeting scheduling and management system.",
      "Subscription-based payment system.",
      "Search functionality with advanced filtering for jobs and people.",
      "Point system for actions like applying for jobs or making offers.",
      "Real-time notifications for updates on job offers, meetings, and applications.",
      "Multi-language support with NextIntl for a global user base.",
      "Fully responsive design for seamless experience across devices.",
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp", "/query.png"],
    link: "https://dr-nurse.vercel.app/en",
    img: ["/drnurse1.png", "/Screenshot 2025-01-21 192831.png", "/drnurse2.png", "/drnurse3.png", "/drnurse4.png"],
  },
];

export const projects = [
  {
    id: 154,
    title: "Shinopi Store |<br> Amazon Clone",
    des: `Shinobi Store is an e-commerce platform inspired by Amazon and Naruto. It boasts powerful features for both users and admins, offering a seamless shopping experience with advanced functionality. Key features include user authentication (with email verification and 2FA), smooth product browsing with advanced filters, detailed product pages, and a multi-step product upload process. It supports real-time notifications and has a robust admin dashboard for managing products, orders, and revenue. Payments are integrated with Stripe for seamless transactions, and sellers automatically get a Stripe Connect account. Built with modern web technologies like Next.js, TypeScript, MongoDB, and React Query, it delivers an optimal user experience with server-side rendering, paginated content, and responsive design.`,
    img: "/Screenshot (206).png",
    gen: "Next",
    features: [
      "Robust signup and login with NextAuth, including email verification.",
      "Beautiful landing page with featured products and categories.",
      "Advanced filtering and sorting by category, subcategory, and custom prices.",
      "Debounced requests to optimize resources.",
      "Server-side rendering, prefetching, and pagination for bookmarkable URLs and state persistence.",
      "Streaming, suspense, and loading skeletons for enhanced performance.",
      "Fully responsive design.",
      "Detailed product pages with zoomable images and image sliders.",
      "Add-to-cart synced with local storage and user accounts.",
      "Reviews and ratings for each product.",
      "Seller profile pages with detailed information.",
      "User dashboard with sales stats, order details, and customer locations.",
      "Admin dashboard for full CRUD operations using React Query.",
      "Admins can view all orders, manage products, send notifications, block users, and track revenue.",
      "Smooth 3-step multi-form: product details, image upload/reordering, and variant management.",
      "Admin notifications for product approval.",
      "Address, location, and phone collection during checkout.",
      "Stripe integration for payments and fund distribution.",
      "Automatic Stripe Connect account creation for sellers.",
      "Payments collected in my Stripe account and distributed to sellers.",
      "Real-time notifications and email updates for user actions.",
      "Built with Next.js, TypeScript, MongoDB, Socket.IO, Tailwind CSS, and React Query.",
    ],

    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://nine-tails-shinobi-shop.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218625840341745666?compact=1",
    git: "https://github.com/Noorhesham/shopify",
  },

  {
    id: 1,
    title: "Quiz Boi |<br> Quiz Multiplayer !",
    des: `upload quizzes, add questions, solve quizzes with data persistence , implemented cheat prevention mechanisms(timers,etc). dynamic homepage showcasing featured quizzes, user authentication,
      leaderboard functionalities, and social interactions including following, commenting, and likes.`,
    img: "/QuizBoi.png",
    gen: "Next",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://quiz-boi.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7184615930960764929?compact=1",
    git: "https://github.com/Noorhesham/Quiz-Boi",
  },
  {
    id: 156,
    title: "Gaming Boi | Full-Stack Game Rating & Wishlist App",
    description:
      "Gaming Boi is a full-stack platform built with Node.js, Next.js, and MongoDB, designed for gamers to rate games, view detailed game information, and add them to their wishlists. The platform allows users to search for games, rate them, and save their favorites to a personal wishlist. The app includes features for user authentication, rating systems, and real-time updates. Built with a modern stack, it offers a responsive design, smooth user experience, and scalable architecture for future expansions.",
    features: [
      "Full-stack app built with Node.js, Next.js, and MongoDB.",
      "User authentication for secure login and registration.",
      "Game rating system where users can rate games.",
      "Search functionality for browsing games.",
      "Wishlist feature to save favorite games.",
      "Real-time updates for game ratings and wishlist changes.",
      "Fully responsive design optimized for both mobile and desktop.",
      "Multi-language support using NextIntl for global users.",
      "Rating history and user interaction data.",
      "Secure and scalable architecture for future features.",
    ],
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://gaming-boi-tutorial2.vercel.app/",
    git: "https://github.com/Noorhesham/gaming-boi-tutorial2",
    img: ["/gamingboi1.png", "/gamingboi2.png", "/gamingboi3"], //["/ ",']
    video: "https://www.youtube.com/embed/tLDDYY49exI?si=5DI7rk5O95wr1hST",
  },
];
export const animationProjcets = [
  {
    id: 157,
    title: "Palestine Website | Interactive Experience for a Cause",
    description:
      "As part of my contribution to the Palestinian cause, I developed the Palestine website, which was designed both as an interactive tutorial and a support platform. The project aimed to raise awareness of the ongoing crisis in Palestine by delivering an engaging and immersive web experience. Using GSAP animations and Locomotive Scroll, I created smooth and captivating animations, making the website more engaging. The project was not only a technical challenge but also a means of offering aid through global recognition. The website garnered attention from the international community, helping to spread awareness and increase support for Palestine during their ongoing crisis. My role was to bring the idea to life, using advanced web technologies to enhance user interaction and provide a platform for support. This project showcased my skills and commitment to using technology for meaningful causes, as it led to positive recognition and increased visibility for Palestine’s crisis.",
    features: [
      "Interactive web experience to raise awareness about Palestine's crisis.",
      "Tutorial-based platform that educates users about the ongoing situation.",
      "GSAP animations and smooth transitions to engage users visually.",
      "Locomotive Scroll integration for an immersive, smooth scrolling experience.",
      "Responsive design to ensure accessibility across devices.",
      "Impactful storytelling with rich media, focusing on the Palestinian cause.",
      "Multi-language support to reach a global audience and increase awareness.",
      "Recognition from international organizations and support networks.",
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.webp", "/logo.gif"],
    link: "https://palestine-help.vercel.app/en ",
    video: "https://www.youtube.com/embed/rjCm_XDTPjQ?si=INIuXOyLzJBtTY0-",
    git: "https://github.com/Noorhesham/palestine-help",
    img: ["/palestine1.png", "/palestine2.png", "/palestine3.png"],
  },
];
export const animationProjcets2 = [
  {
    id: 157,
    title: "Palestine Website | Interactive Experience for a Cause",
    description:
      "As part of my contribution to the Palestinian cause, I developed the Palestine website, which was designed both as an interactive tutorial and a support platform. The project aimed to raise awareness of the ongoing crisis in Palestine by delivering an engaging and immersive web experience. Using GSAP animations and Locomotive Scroll, I created smooth and captivating animations, making the website more engaging. The project was not only a technical challenge but also a means of offering aid through global recognition. The website garnered attention from the international community, helping to spread awareness and increase support for Palestine during their ongoing crisis. My role was to bring the idea to life, using advanced web technologies to enhance user interaction and provide a platform for support. This project showcased my skills and commitment to using technology for meaningful causes, as it led to positive recognition and increased visibility for Palestine’s crisis.",
    features: [
      "Interactive web experience to raise awareness about Palestine's crisis.",
      "Tutorial-based platform that educates users about the ongoing situation.",
      "GSAP animations and smooth transitions to engage users visually.",
      "Locomotive Scroll integration for an immersive, smooth scrolling experience.",
      "Responsive design to ensure accessibility across devices.",
      "Impactful storytelling with rich media, focusing on the Palestinian cause.",
      "Multi-language support to reach a global audience and increase awareness.",
      "Recognition from international organizations and support networks.",
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.webp", "/logo.gif"],
    link: "https://palestine-help.vercel.app/en ",
    video: "https://www.youtube.com/embed/rjCm_XDTPjQ?si=INIuXOyLzJBtTY0-",
    git: "https://github.com/Noorhesham/palestine-help",
    img: ["/palestine1.png", "/palestine2.png", "/palestine3.png"],
  },
];
export default {
  projects,
  projects2,
  SERVICES,
  TECH,
  animationProjcets2,
};
