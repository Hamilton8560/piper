"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation"; // Import useRouter to handle redirection
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';

// Replace with your EmailJS details
const SERVICE_ID = "service_gy9pfw8";
const TEMPLATE_ID = "template_jams4pp";
const PUBLIC_KEY = "b2vMoQ9g03st1oCv7";

const info = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    description: "(+1) 813 473 2319", // Replace with your WhatsApp number
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "thugymdotfox@outlook.com", // Replace with your actual email
  },
];

const Contact = () => {
  const form = useRef();
  const router = useRouter(); // Initialize the router to navigate

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        router.push("/"); // Redirect to the home screen after success
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>

              <p className="text-white/60">
                Reach out to book a personal training session or inquire about fitness programs.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" placeholder="Firstname" required />
                <Input name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Personal Training Program">Personal Training Program</SelectItem>
                    <SelectItem value="Nutrition Coaching">Nutrition Coaching</SelectItem>
                    <SelectItem value="Online Zoom Session">Online Zoom Session</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea name="message" className="h-[200px]" placeholder="Type your message here." />
              {/* btn */}
              <Button size="md" type="submit" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
