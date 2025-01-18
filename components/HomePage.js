"use client";
import React from "react";
import Link from "next/link";
import { LampContainer } from "./ui/lamp";
import { Vortex } from "./ui/vortex";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image"
import download from "../assets/download.jpg"
import orangeCat from "../assets/orange-cat-2.jpg"
import luffy from "../assets/luffy.jpg"
import zoro from "../assets/zoro.jpg"
import robin from "../assets/robin.jpg"
import nami from "../assets/nami.jpg"
import sanji from "../assets/sanji.jpg"
import naruto from "../assets/naruto.jpg"
import sasuke from "../assets/sasuke.jpg"
import search from "../assets/search.png"
import rupees from "../assets/rupees.png"
import pay from '../assets/pay.png'
import message from '../assets/mess.png'
// import { motion } from "framer-motion";
import { HeroParallax } from "./ui/hero-parallax";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
 


const HomePage = () => {
  const content = [
    {
      title: "Find your creator.",
      description:
        "Easily discover and support your favorite creators! Simply use the search button on the NavBar to find the creators you admire and show your support in just a few clicks.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={search}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Select the amount or snack.",
      description:
        "Choose how you'd like to support your creator by selecting a snack or entering a custom amount. Whether it's a small treat or something bigger, your contribution helps creators continue doing what they love.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={rupees}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Leave a Personal Message",
      description:
        "Share your thoughts, appreciation, or a special message with the creator! Whether it's a thank you note or a kind word, your message adds a personal touch to your support.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={message}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Make the Payment",
      description:
        "Once you're ready, complete your purchase securely. With just a few clicks, your support will be sent directly to your favorite creator. It's quick, easy, and rewarding!",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={pay}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  const products = [
    {
      title: "sasuke",
      link: "/sasuke",
      thumbnail:sasuke,
    },
    {
      title: "Luffy",
      link: "/luffy",
      thumbnail:luffy,
    },
    {
      title: "H1tler",
      link: "/h1tler",
      thumbnail:download,
    },
   
    {
      title: "Zoro",
      link: "/zoro",
      thumbnail:zoro,
    },
    {
      title: "sanji",
      link: "/sanji",
      thumbnail:sanji,
    },
    {
      title: "Nami",
      link: "/Nami",
      thumbnail:nami,
    },
    {
      title: "Robin",
      link: "/robin",
      thumbnail:robin,
    },
    {
      title: "somilbangari72",
      link: "/somilbangari72",
      thumbnail:orangeCat,
    },
    {
      title: "Naruto",
      link: "/naruto",
      thumbnail:naruto,
    },
    {
      title: "Nami",
      link: "/Nami",
      thumbnail:nami,
    },
  ];

  return (
    <>
     <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Buy me a Snack
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        A Crowdfunding platform for creaters. Get funded by your fans and
        followers. Start Now!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href="login">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          Start my Page
          </button>
          </Link>
        </div>
        <p className="mt-3 text-md">It free and takes less than a minute!</p>
      </Vortex>
    </div>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
         Give your audience<br></br>
         an easy way to say thanks. <br />
        </motion.h1>
        <p className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-xl">Buy Me a Snack makes supporting fun and easy. In just a couple of taps, your fans can <br></br>make the payment (buy you a snack) and leave a message.</p>
      </LampContainer>

      <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
      Buy a Snack in  {" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">4 Easy Steps</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">4 Easy Steps</span>
          </div>
        </div>
      </h2>
      <div className="p-10">
      <StickyScroll content={content} />
    </div>
    </BackgroundBeamsWithCollision>
    <HeroParallax products={products} />

    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Designed for creators,<br /> not for businesses.
        </h1>
      </div>
    </div>
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="We don't call them customers or transactions. They are your supporters." icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="You have 100% ownership of your supporters. We never email them, and you can export the list any time you like." icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="You get paid instantly to your bank account. No more 30-day delays." icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
};

export default HomePage;

const Card = ({
  title,
  icon,
  children,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};
 
const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};
 
export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

