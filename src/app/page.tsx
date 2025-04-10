'use client'

import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import { useState } from 'react';

const stats = [
  { number: 50, plus: "+", label: "STUDENTS TAUGHT" },
  { number: 4, plus: "+", label: "PROJECTS COMPLETED" },
  { number: 3, plus: "", label: "TEAMS COACHED" },
  { number: 6, plus: "+", label: "ROBOTS DESIGNED" },
  { number: 2, plus: "", label: "WORKSHOPS CONDUCTED" },
  { number: 5, plus: "+", label: "WEBSITES BUILT" },
];

const testimonials = [
  { name: "Dr. Kwame Oteng-Gyasi", image: "/people/kog.jpg", position: "Senior Lecturer, KNUST", feedback: "Jonathan has a keen eye for detail, a valuable asset to any team." },
  { name: "Dr. Ing. Michael Wilson", image: "/people/mwilson.jpg", position: "Head of Electronics Division, CSIR-INSTI", feedback: "I was excited to work with Jonathan and get to work on a project I've envisioned for years. He was a pleasure to work with and I can't recommend him enough." },
];

const myServices = [
  { name: "Web Development", icon: ChevronLeft },
  { name: "Robotics Training", icon: ChevronRight },
  { name: "Robot Designing", icon: ChevronLeft },
  { name: "Research", icon: ChevronRight },
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
          <h2 className="text-lg md:text-xxl font-bold text-center">
            HI THERE!
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Welcome <span className="text-blue-900">To</span> My Space!
          </h1>
        </div>
      </div>

      <div className="container flex justify-center absolute top-[40%] mx-auto z-20">
        <div className="relative grid md:grid-cols-3 gap-6 p-4">
          <div>
            <Profile />
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg border-b-2 border-blue-900 bg-neutral-900 flex flex-col items-center justify-center">
                  <h2 className="text-3xl font-bold py-4 px-24">{stat.number}<span className="text-blue-900 ml-1">{stat.plus}</span></h2>
                  <div className="border-b border-white w-4/5 opacity-20"></div>
                  <p className="py-4 font-semibold text-center">{stat.label}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="py-8">MY STORY</h2>
              <p className="p-4 rounded-lg border-b-2 border-blue-900 bg-neutral-900">
                I'm a third-year Computer Engineering student with a passion for bringing ideas to life with technology.
                As a natural project leader, I combine my technical expertise in robotics with frontend development to create innovative solutions.
                Currently exploring the interesting realm of Robot Operating System(ROS) and learning a little backend development.
              </p>
            </div>
            <div className="relative group">
              <h2 className="pt-8">TESTIMONIALS</h2>
              <div className="flex overflow-hidden min-h-[300px] items-center justify-center">
                <div className="relative flex-shrink-0 w-full transition-opacity duration-500">
                  <div className="flex flex-col items-center w-full bg-neutral-900 p-4 rounded-lg border-b-2 border-blue-900">
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
                  </div>
                </div>
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
            <div>
              <h2 className="pb-8">MY SERVICES</h2>
              <div className="grid grid-cols-2 gap-6">
                {myServices.map((service, index) => (
                  <div key={index} className="p-4 rounded-lg border-b-2 border-blue-900 bg-neutral-900 flex flex-col">
                    <div className="text-white/50 p-2">
                      <service.icon className="h-6 w-6" />
                      <h2 className="mt-8">{service.name}</h2>
                    </div>
                  </div>
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
