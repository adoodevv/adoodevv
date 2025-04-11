'use client'

import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GiRobotGolem, GiTeacher } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import { useState } from 'react';
import CountUpNumber from "@/components/CountUpNUmber";
import FadeUpAnimation from "@/components/FadeUp";

const stats = [
  { number: 50, plus: "+", label: "STUDENTS TAUGHT" },
  { number: 4, plus: "+", label: "PROJECTS COMPLETED" },
  { number: 6, plus: "+", label: "ROBOTS DESIGNED" },
  { number: 2, plus: "", label: "WORKSHOPS CONDUCTED" },
  { number: 5, plus: "+", label: "WEBSITES BUILT" },
  { number: 3, plus: "", label: "TEAMS COACHED" },
];

const testimonials = [
  { name: "Dr. Kwame Oteng-Gyasi", image: "/people/kog.jpg", position: "Senior Lecturer, KNUST", feedback: "Jonathan has a keen eye for detail, a valuable asset to any team." },
  { name: "Dr. Ing. Michael Wilson", image: "/people/mwilson.jpg", position: "Head of Electronics Division, CSIR-INSTI", feedback: "I was excited to work with Jonathan and get to work on a project I've envisioned for years. He was a pleasure to work with and I can't recommend him enough." },
];

const myServices = [
  { name: "Web Development", icon: FaLaptopCode },
  { name: "Robotics Training", icon: GiTeacher },
  { name: "Robot Designing", icon: GiRobotGolem },
  { name: "Research", icon: TbReportSearch },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsLength = testimonials.length;

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsLength) % testimonialsLength);
  };

  return (
    <div className="container relative mx-auto items-center relative min-h-screen">
      <div className="relative w-full h-[50vh] rounded-b-4xl overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/hero1.jpg"
          alt="Ocean background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-base md:text-lg font-bold text-center">
            HI THERE!
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Welcome To My Space!
          </h1>
        </div>
      </div>

      <div className="container flex justify-center absolute top-[40%] mx-auto z-20">
        <div className="relative grid md:grid-cols-3 gap-6 p-4">
          <div className="md:sticky md:top-24 md:self-start md:h-[calc(100vh-5rem)] w-full">
            <Profile />
          </div>
          <div className="md:col-span-2 md:mt-10">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <FadeUpAnimation key={index} delay={index * 0.1}>
                  <div className="p-4 rounded-lg border-b-2 border-blue-900 bg-neutral-900 flex flex-col items-center justify-center">
                    <span className="flex items-center text-3xl font-bold py-4 px-24"><CountUpNumber endValue={stat.number} duration={1000} /><span className="text-blue-900 ml-1">{stat.plus}</span></span>
                    <div className="border-b border-white w-4/5 opacity-20"></div>
                    <p className="py-4 font-semibold text-center">{stat.label}</p>
                  </div>
                </FadeUpAnimation>
              ))}
            </div>
            <div>
              <h2 className="py-8">MY STORY</h2>
              <FadeUpAnimation delay={0.1}>
                <p className="p-4 rounded-lg border-b-2 border-blue-900 bg-neutral-900">
                  I'm a third-year Computer Engineering student with a passion for bringing ideas to life with technology.
                  As a natural project leader, I combine my technical expertise in robotics with frontend development to create innovative solutions.
                  Currently exploring the interesting realm of Robot Operating System(ROS) and learning a little backend development.
                </p>
              </FadeUpAnimation>
            </div>
            <div className="relative">
              <h2 className="py-8 md:py-0 md:pt-8">TESTIMONIALS</h2>
              <FadeUpAnimation delay={0.1}>
                <div className="flex overflow-hidden min-h-[300px] items-center justify-center">
                  <div className="flex-shrink-0 w-full transition-opacity duration-500">
                    <div className="group relative flex flex-col items-center w-full bg-neutral-900 p-4 rounded-lg border-b-2 border-blue-900">
                      <div className="w-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].name}
                          width={256}
                          height={256}
                          priority
                        />
                      </div>
                      <h2 className="font-bold text-lg md:text-xl">{testimonials[activeIndex].name}</h2>
                      <p className="text-sm text-green-300">{testimonials[activeIndex].position}</p>
                      <p className="font-bold text-white/50 text-center mt-2">
                        {testimonials[activeIndex].feedback}
                      </p>
                      <button
                        className="absolute left-4 top-1/3 md:top-1/2 transform -translate-y-1/2 bg-blue-900 p-2 rounded-full text-white md:opacity-0 group-hover:opacity-100 transition-all duration-300"
                        onClick={handlePrev}
                      >
                        <ChevronLeft size={24} />
                      </button>

                      <button
                        className="absolute right-4 top-1/3 md:top-1/2 transform -translate-y-1/2 bg-blue-900 p-2 rounded-full text-white md:opacity-0 group-hover:opacity-100 transition-all duration-300"
                        onClick={handleNext}
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeUpAnimation>
            </div>
            <div>
              <h2 className="py-8">MY SERVICES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {myServices.map((service, index) => (
                  <FadeUpAnimation key={index} delay={index * 0.1}>
                    <div className="p-4 rounded-lg border-b-2 border-blue-900 bg-neutral-900 flex flex-col items-center justify-center">
                      <service.icon className="h-12 w-12 text-white/50" />
                      <h2 className="mt-4 md:mt-8 text-white">{service.name}</h2>
                    </div>
                  </FadeUpAnimation>
                ))}
              </div>
            </div>
            <div className="py-16">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
