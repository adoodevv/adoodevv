"use client";

import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  { label: "Email", href: "mailto:adoojonathan412@gmail.com" },
  { label: "GitHub", href: "https://github.com/adoodevv" },
  { label: "X", href: "https://x.com/adoodevv" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jonathan-adoo" },
];

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="px-6 pt-24 pb-12">
      <div className="flex flex-col items-start gap-14 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-8 max-w-2xl w-full">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Jonathan Adoo
            </h1>

            <div className="space-y-5 text-base leading-relaxed">
              <p>
                Currently in my final year studying Computer Engineering. I&apos;m a
                Robotics Trainer at{" "}
                <a
                  href="https://www.linkedin.com/company/mikrobot-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mikrobot Academy
                </a>{" "}
                and an open-source contributor - I&apos;ve shipped projects like{" "}
                <a
                  href="https://github.com/adoodevv/diff_drive_robot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  diff_drive_robot
                </a>
                , a ROS 2 Jazzy + Gazebo Harmonic simulation with SLAM and Nav2
                used by developers worldwide, and{" "}
                <a
                  href="https://github.com/adoodevv/so101_ros2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  so101_ros2
                </a>
                , a full control stack for the SO-101 robot arm with MoveIt,
                ros2_control, and Gazebo sim.
              </p>

              <p>
                Today I&apos;m focused on making robotics software more
                accessible - from simulation and navigation to manipulation -
                and sharing what I learn through technical writing and open
                source. If you&apos;re working on something interesting,{" "}
                <a href="mailto:adoojonathan412@gmail.com">get in touch</a>.
              </p>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="group flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground"
              aria-expanded={expanded}
            >
              <span
                className={`inline-block transition-transform duration-200 ${expanded ? "rotate-90" : ""
                  }`}
                aria-hidden
              >
                ▶
              </span>
              More about me
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "mt-5 max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="space-y-4 text-base leading-relaxed md:text-[17px]">
                <p>
                  My path into robotics started early - tinkering with kits and
                  competitions in grade school, then diving deeper through
                  university labs and personal projects. During my bachelor&apos;s
                  degree, robotics peaked for me. I studied the mathematics and 
                  physics of robotics, and I developed a deep understanding of the 
                  principles of control, estimation, and decision-making.
                </p>
                <p>
                  I write about robotics on{" "}
                  <a
                    href="https://adoodevv.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hashnode
                  </a>
                  , maintain open-source ROS 2 packages and templates for the
                  community, and contribute to projects.
                </p>
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative w-full max-w-md justify-self-center lg:max-w-none lg:justify-self-end aspect-square">
          <Image
            src="/profile.png"
            alt="Jonathan Adoo in a robotics workshop"
            fill
            priority
            className="rounded-lg object-cover object-center"
            sizes="(max-width: 1024px) 512px, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
