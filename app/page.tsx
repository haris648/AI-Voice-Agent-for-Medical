"use client";


import { motion } from "motion/react";
import { FeaturesBentoGrid } from "./_components/FeaturesBentoGrid";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'
import HomeCarousel from "./_components/HomeCarousel";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import { PhoneCall, VideoIcon } from "lucide-react";
import { IconArrowRight } from "@tabler/icons-react";
import HowItWorksSection from "./_components/HowItWorksSection";
import TestimonialsSection from "./_components/TestimonialsSection";


export default function Homepage() {
  return (
    <div className="relative my-10 flex flex-col items-center justify-center ">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl dark:text-slate-300">
  {["Your", "AI", "Medical"].map((word, index) => (
    <motion.span
      key={`line1-${index}`}
      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      className={`mr-2 inline-block ${
        word === "Medical" ? "text-blue-500 dark:text-blue-400" : ""
      }`}
    >
      {word}
    </motion.span>
  ))}
  <br />
  {["Voice", "Assistant"].map((word, index) => (
    <motion.span
      key={`line2-${index}`}
      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        delay: (index + 2) * 0.1, // continue delay from previous line
        ease: "easeInOut",
      }}
      
      className="mr-2 inline-block"
    >
      {word}
    </motion.span>
  ))}
</h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Save time, improve patient care, and let AI handle your symptoms and diseases. Experience the future of healthcare with intelligent voice-powered consultations.
        </motion.p>

        <div className="flex flex-wrap gap-4 mt-8 z-10 relative items-center justify-center ">
        <Link href={'/sign-in'}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            
          >
            <button className="w-60 flex items-center justify-center gap-2 cursor-pointer transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Explore Now
              <IconArrowRight className="w-5 h-5" />
            </button>

            
          </motion.div>
        </Link>

        <Link href={'https://drive.google.com/file/d/14qbroiBVfm2IDqICL4JgtVKyeLPpp_oe/view?usp=sharing'}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            
          >
            <button className="w-60 flex items-center justify-center gap-2 cursor-pointer transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Watch Demo
              <VideoIcon className="w-5 h-5" />
            </button>
            
          </motion.div>
        </Link>
        </div>
      </div>
      <FeaturesSection/>
      <HowItWorksSection/>
      <TestimonialsSection/>
    </div>
  );
}

const Navbar = () => {
  const {user}=useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <Image src={'/MedLogo.png'} alt='logo' width={160} height={80} />
      </div>
      {!user ?
        <Link href={'/sign-in'}>
          <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Login
          </button>
        </Link>
      :
      <div className="flex gap-5 items-center">
      <UserButton/>
      
        <Link href={'/dashboard'}>
          <Button className="cursor-pointer">Dashboards</Button>
        </Link>
      </div>
      }
    </nav>
  );
};
