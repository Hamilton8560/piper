import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

const MobileHome = () => {
  return (
    <section className="h-full">
    {/* Video Section */}
    <div className="fixed inset-0 z-[-1]">
      <video
        className="w-full h-full object-cover"
        src="/assets/video.mp4"  // Replace with your actual video path
        autoPlay
        loop
        muted
        playsInline  // Add this attribute for mobile support
      />
    </div>
  
    {/* Start Program and Socials */}
    <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-8 z-10">
    <div className="relative group">
    <a
    
      // href="https://calendly.com/davidhamilton473/fitness-consultation" // Replace with your Calendly link
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
      <div>
        <Social
          containerStyles="flex gap-6"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </div>
  </section>
  
  );
};

export default MobileHome;