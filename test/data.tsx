import googleLogo from "./../public/images/google.svg";
import mtnLogo from "./../public/images/MTN.svg";
import nickelodeonLogo from "./../public/images/nickelodeon.svg";
import cnLogo from "./../public/images/cartoon-network.svg";
// import boltLogo from "./../public/images/Bolt.svg";
import betwayLogo from "./../public/images/Betway.svg";
import microsoftLogo from "./../public/images/MS.svg";
import filmHouseLogo from "./../public/images/FilmHouse.svg";
import waltDisneyLogo from "./../public/images/Walt-Disney.svg";
// import ibmLogo from "./../public/images/IBM.svg";
import irokoTVLogo from "./../public/images/IrokoTV.svg";
import historyChannelLogo from "./../public/images/history_channel.svg";
import { StaticImageData } from "next/image";


type imageProps = {
  name: string;
  logo: StaticImageData;
};

const today: Date = new Date();

// function addDays(days: number) {
//   today.setDate(today.getDate() + 1);
//   return today;
// }

export const partners: imageProps[] = [
  {
    name: "Walt Disney",
    logo: waltDisneyLogo
  },
  {
    name: "History Channel",
    logo: historyChannelLogo
  },
  {
    name: "Nickelodeon",
    logo: nickelodeonLogo
  },
  // {
  //   name: "IBM",
  //   logo: ibmLogo
  // },
  {
    name: "Iroko TV",
    logo: irokoTVLogo,
  },
  {
    name: "MTN",
    logo: mtnLogo,
  },
  // {
  //   name: "Microsoft",
  //   logo: microsoftLogo
  // },
  {
    name: "Cartoon Network",
    logo: cnLogo
  },
  {
    name: "Google",
    logo: googleLogo
  },
  {
    name: "Film House",
    logo: filmHouseLogo,
  },
  // {
  //   name: "Bolt",
  //   logo: boltLogo,
  // },
  {
    name: "Betway",
    logo: betwayLogo,
  },
];

export const allCategories = [
  {
    name: "Music",
    image: "/images/mic.jpeg",
    // link: ,
  },
  {
    name: "Community & Culture",
    image: "/images/event_centre.jpeg",
    // link: ,
  },
  {
    name: "Sports & Fitness",
    image: "/images/olympics.jpeg",
    // link: ,
  },
  {
    name: "Performance & Visual Arts",
    image: "/images/movie.jpeg",
    // link: ,
  },
  {
    name: "Health",
    image: "/images/exercise.jpeg",
    // link: ,
  },
  {
    name: "Food & Drink",
    image: "/images/wedding.jpeg",
    // link: ,
  },
  {
    name: "Business",
    image: "/images/conference.jpeg",
    // link: ,
  },
  // {
  //     name: "Charity",
  //     icon: ,
  //     // link: ,
  // },
  // {
  //     name: "",
  //     icon: ,
  //     // link: ,
  // },
]

export const trendingEvents = [
  {
    id: 1,
    image: "./images/tech_guys.jpeg",
    name: "Tech Connect: Accra Conference",
    location: "Kempinski Hotel, Accra",
    date: today,
    time: today,
    host: "Tech Connect Africa",
    prices: ["$35.00"],
    followerCount: "12k",
  },
  {
    id: 2,
    image: "./images/wedding.jpeg",
    name: "Maven weds ...",
    location: "Aviation Social Centre, Accra",
    date: today,
    time: today,
    host: "Wunnam Maven",
    prices: ["$35.00"],
    followerCount: "19",
  },

  {
    id: 3,
    image: "./images/confetti.jpeg",
    name: "Africa's Got Talent",
    location: "Black Star Square, Accra",
    date: today,
    time: today,
    host: "Multichoice",
    prices: ["$35.00"],
    followerCount: "12k",
  },
  //   Ad
  {
    id: 4,
    image: "./images/show.jpeg",
    name: "MLLE Worldwide Tour: Ghana",
    location: "Accra Internationl Conference Centre, Accra",
    date: today,
    time: today,
    host: "Starboy Entertainment",
    prices: ["$35.00"],
    followerCount: "9M",
  },
  {
    id: 5,
    image: "./images/pray.jpeg",
    name: "Holy Ghost Night",
    location: "Accra Sports Stadium, Acccra",
    date: today,
    time: today,
    host: "Fountain Gate Chapel",
    prices: "Free",
    followerCount: "12k",
  },
  {
    id: 6,
    image: "./images/ticket.jpg",
    name: "FadLan Town Zaa Tour: Accra",
    location: "National Theatre, Accra",
    date: today,
    time: today,
    host: "Young Bull Records",
    prices: ["$35.00"],
    followerCount: "12k",
  },
];

export const moreEvents = [
  {
    image: "./images/atlassian.webp",
    name: "Atlassian Connect '23",
    location: "Marriott Hotel, Accra",
    date: today,
    time: today,
    host: "Atlassian Labs",
    prices: "Invite only",
    followerCount: "12k",
  },
  {
    image: "./images/disco_ball.jpeg",
    name: "Maven weds ...",
    location: "Aviation Social Centre, Accra",
    date: today,
    time: today,
    host: "Wunnam Maven",
    prices: ["$35.00"],
    followerCount: "19",
  },

  {
    image: "./images/app_launch.jpeg",
    name: "TechCrunch Disrupt: Africa Conference",
    location: "Black Star Square, Accra",
    date: today,
    time: today,
    host: "TechCrunch Africa",
    prices: "Invite only",
    followerCount: "12k",
  },
  //   Ad
  {
    image: "./images/exercise.jpeg",
    name: "MLLE Worldwide Tour: Ghana",
    location: "Accra Internationl Conference Centre, Accra",
    date: today,
    time: today,
    host: "Starboy Entertainment",
    prices: ["$35.00"],
    followerCount: "9M",
  },
  {
    image: "./images/lukmannil-hakim-xk7edWcxZRU-unsplash.jpeg",
    name: "Holy G,host Night",
    location: "Accra Sports Stadium, Acccra",
    date: today,
    time: today,
    host: "Church",
    prices: "Free",
    followerCount: "12k",
  },
  {
    image: "./images/olympics.jpeg",
    name: "FadLan Town Zaa Tour: Accra",
    location: "National Theatre, Accra",
    date: today,
    time: today,
    host: "Young Bull Records",
    prices: ["$35.00"],
    followerCount: "12k",
  },
  {
    image: "./images/fashion.jpeg",
    name: "Accra Fashion Week '23",
    location: "National Theatre, Accra",
    date: today,
    time: today,
    host: "Young Bull Records",
    prices: ["$35.00"],
    followerCount: "12k",
  },
  {
    image: "./images/movie.jpeg",
    name: "FadLan Town Zaa Tour: Accra",
    location: "National Theatre, Accra",
    date: today,
    time: today,
    host: "Young Bull Records",
    prices: ["$35.00"],
    followerCount: "12k",
  },
];
