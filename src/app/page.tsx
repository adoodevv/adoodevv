import TypingAnimation from "@/components/TypingAnimation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";

const stats = [
  { number: 50, plus: "+", label: "STUDENTS TAUGHT" },
  { number: 4, plus: "+", label: "PROJECTS COMPLETED" },
  { number: 3, plus: "", label: "TEAMS COACHED" },
  { number: 6, plus: "+", label: "ROBOTS DESIGNED" },
  { number: 2, plus: "", label: "WORKSHOPS CONDUCTED" },
  { number: 5, plus: "+", label: "WEBSITES BUILT" },
]

const testimonials = [
  { name: "Dr. Kwame Oteng-Gyasi", position: "", feedback: "Great guy!" },
]

const work = ["I'M A ROBOTICIST", "I'M A FRONTEND WEB DEVELOPER", "I'M A TUTOR", "I LOVE F1"];

export default function Home() {
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
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="montserrat-h1 text-4xl md:text-6xl font-bold text-center">
            Welcome To My Space!
          </h1>
        </div>
      </div>

      <div className="container flex justify-center absolute top-[40%] mx-auto z-20">
        <div className="relative flex flex-col md:flex-row gap-6 p-4">
          <div className="md:w-[35%] p-4 montserrat-p rounded-lg border-t-2 border-blue-900 bg-neutral-900 flex flex-col items-center justify-center">
            <Image
              src="/profile.png"
              alt="Profile Image"
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="montserrat-h3 mb-2">Jonathan Darko Adoo</h3>
            <div className="font-semibold text-green-300 text-xs mb-6">
              <TypingAnimation
                items={work}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenItems={1500}
              />
            </div>
            <div className="border-b border-white w-4/5 opacity-20"></div>
            <div className="flex gap-8 py-8">
              <Link href="https://x.com/adoodevv/"><FaXTwitter className="w-5 h-5" /></Link>
              <Link href="https://github.com/adoodevv/"><FaGithub className="w-5 h-5" /></Link>
              <Link href="https://instagram.com/adoodevv/"><FaInstagram className="w-5 h-5" /></Link>
              <Link href="https://hashnode.com/@adoodevv/"><FaHashnode className="w-5 h-5" /></Link>
              <Link href="https://www.youtube.com/@adoodevv/"><FaYoutube className="w-5 h-5" /></Link>
            </div>
            <div className="border-b border-white w-4/5 opacity-20"></div>
          </div>
          <div className="abosolute top-0 right-0 grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 montserrat-p rounded-lg border-b-2 border-blue-900 bg-neutral-900 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold py-4 px-24">{stat.number}<span className="text-blue-900 ml-1">{stat.plus}</span></h2>
                <div className="border-b border-white w-4/5 opacity-20"></div>
                <p className="py-4 font-semibold text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}