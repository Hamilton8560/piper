"use client"; // Ensure the component is treated as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use the new Next.js navigation API
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        router.push("/mobile-home"); // Redirect to mobile-specific page if on mobile screen
      }
    };
   
    // Check screen size on initial render
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [router]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fitness Coach</span>
            <h1 className="h1 mb-6">
              Welcome! I&apos;m <br /> <span className="text-accent">Pyper J </span>
            </h1>
            <p class="max-w-[500px] mb-9 text-white/80">
            Hi, I’m <strong>Pyperj</strong>, here at your service. I’ve trained a long way through my fitness journey that first started in the military, leading me to you.
          </p>
          <p class="max-w-[500px] mb-9 text-white/80">
            Fitness is more than just a routine—it&apos;s a lifestyle that has shaped who I am today. My journey began with a transformative experience during my time in the <strong>U.S. Army</strong>, where discipline, resilience, and physical training became central to my life. Those foundational lessons not only instilled a passion for fitness but also taught me the value of pushing limits and achieving goals.
          </p>
          <p class="max-w-[500px] mb-9 text-white/80">
            After years of honing my skills, I’ve channeled this passion into helping others also unlock their full potential. Whether you&apos;re looking to shred fat, build muscle, or simply embrace a healthier lifestyle to tone and maintain, I’m here to guide you every step of the way. My tailored programs combine military-grade discipline with real-world practicality, ensuring every client achieves sustainable and measurable results.
          </p>
          <p class="max-w-[500px] mb-9 text-white/80">
            Ready to transform your life? Let’s embark on this journey together!
          </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <div className="relative group">
              <a
                // href="http://program.zumrod.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-500"
              >
                <span>Start Program</span>
                <FiDownload className="text-xl" />
              </a>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-gray-800 text-white text-sm rounded-md py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Coming soon!
            </span>
          </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
