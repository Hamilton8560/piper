"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import nutritionImage from "../../public/assets/Nutrition.jpg";
import blueImage from "../../public/blueJacket.jpg"
import smileImage from "../../public/assets/smile.jpg"
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Updated services for the fitness trainer
const services = [
  {
    num: "01",
    category: "Personal Training",
    title: "One-on-One Coaching",
    description:
      "Personalized training sessions designed to help you achieve your fitness goals, whether you're looking to lose weight, build muscle, or improve overall wellness.",
    stack: [{ name: "Strength Training" }, { name: "HIIT" }, { name: "Cardio" }],
    image: smileImage,  // Update with actual image path
    live: "https://calendly.com/davidhamilton473/fitness-consultation", // Replace with actual Calendly booking link
  },
  {
    num: "02",
    category: "Online Coaching",
    title: "Virtual Coaching",
    description:
      "Train from anywhere with customized virtual coaching sessions tailored to your schedule and goals. Get real-time feedback and support from a certified trainer.",
    stack: [{ name: "Virtual Sessions" }, { name: "Customized Workouts" }],
    image: "/assets/fitness/online_coaching.png",
    live: "https://calendly.com/davidhamilton473/fitness-consultation",
  },
  {
    num: "03",
    category: "Nutrition Coaching",
    title: "Nutrition Coaching",
    description:
      "Comprehensive nutrition plans that complement your fitness routine, including personalized meal plans and guidance to help you fuel your body effectively.",
    stack: [{ name: "Meal Planning" }, { name: "Nutrition Advice" }],
    image: nutritionImage,
    live: "https://calendly.com/davidhamilton473/fitness-consultation",
  },
  {
    num: "04",
    category: "Life Coaching",
    title: "Life Coaching",
    description:
      "Focused on helping you set and achieve personal or professional goals, with guidance on lifestyle improvements and overall well-being.",
    stack: [{ name: "Lifestyle" }, { name: "Mental Wellness" }],
    image: "/assets/fitness/life_coaching.png",
    live: "https://calendly.com/davidhamilton473/fitness-consultation",
  },
];

const Work = () => {
  const [service, setService] = useState(services[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setService(services[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Service number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {service.num}
              </div>
              {/* Service category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {service.category} Program
              </h2>
              {/* Service description */}
              <p className="text-white/60">{service.description}</p>
              {/* Training Methods (Stack) */}
              <ul className="flex gap-4">
                {service.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== service.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Booking Button */}
              <div className="flex items-center gap-4">
                <Link href={service.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Book Session</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Image Slider for Services */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-gray-50/20">
                    {/* Image Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Service Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image}
                        fill
                        className="object-cover"
                        alt={service.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
