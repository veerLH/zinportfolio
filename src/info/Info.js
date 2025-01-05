import self from "../img/self.jpg";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(2, 135, 244)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Zin",
  lastName: "Lynn Htun",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the Japan",
    },
    {
      emoji: "💼",
      text: "Developer at EWhale Software Company",
    },
    {
      emoji: "📧",
      text: "zinlynnhtun.dev@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/mgzinlynn.htun.35",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://www.instagram.com/mgzinlynn/profilecard/?igsh=MXJ3ZzdvcmQ2dHhvMw==",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/zinlynnhtun",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/zin-lynn-htun-435614159/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Zin Lynn Htun. I'm a Backend Developer for Ewhale Software Solutions. I studied CompSci at UCST(Myanmar), I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "PHP",
      "Laravel",
      "mysql",
      "React Native",
    ],
    exposedTo: ["PHP", "Laravel", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },

    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Better HR",
      live: "https://betterhr.io/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Ewhale Software Solutions",
      live: "https://www.ewhalemyanmar.com/",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Ministry of Construction",
      live: "https://construction.gov.mm/",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Sonic Star Travel and Tours",
      live: "https://www.sonicstartravel.com/",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
  ],
};
