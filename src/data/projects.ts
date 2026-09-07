export type ProjectLink = {
  label: string;
  href: string;
  type?: "youtube" | "github" | "external";
};

export type Project = {
  title: string;
  year: string;
  kind: "robotics" | "software";
  stack: string[];
  description: string;
  image?: { src: string; alt: string };
  youtubeId?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "diff_drive_robot",
    year: "2024",
    kind: "robotics",
    stack: ["ROS 2 Jazzy", "Gazebo Harmonic", "SLAM Toolbox", "Nav2", "Python"],
    description:
      "A ready-to-run simulation of a two-wheeled robot that spares people the days of setup usually needed before they can drive one. It ships the whole stack — robot description, lidar, keyboard control, SLAM mapping with EKF sensor fusion, and Nav2 navigation on ROS 2 Jazzy and Gazebo Harmonic — and has become a starting point for robotics learners and students worldwide.",
    image: {
      src: "/portfolio/diff_drive_gazebo.png",
      alt: "Differential drive robot simulation in Gazebo Harmonic",
    },
    youtubeId: "QhYGT-Zu-14",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/diff_drive_robot",
        type: "github",
      },
      {
        label: "SLAM & Nav2 simulation demo",
        href: "https://youtu.be/QhYGT-Zu-14",
        type: "youtube",
      },
    ],
  },
  {
    title: "so101_ros2",
    year: "2026",
    kind: "robotics",
    stack: ["ROS 2 Jazzy", "MoveIt 2", "ros2_control", "Gazebo Harmonic", "Python"],
    description:
      "A complete control stack for the SO-101 robot arm, taking it from a 3D description to picking things up in simulation. It covers the arm's model and meshes, RViz visualization, ros2_control with trajectory control for the arm and gripper, and a pick-and-place world in Gazebo Harmonic, with MoveIt 2 motion planning and a real-hardware interface on the roadmap.",
    image: {
      src: "/portfolio/so101_gazebo.png",
      alt: "SO-101 follower arm in Gazebo simulation",
    },
    youtubeId: "o6Ws_Hf_CYc",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/so101_ros2",
        type: "github",
      },
      {
        label: "MoveIt 2 motion planning demo",
        href: "https://youtu.be/o6Ws_Hf_CYc",
        type: "youtube",
      },
    ],
  },
  {
    title: "Self-Driving RC Car",
    year: "2025",
    kind: "robotics",
    stack: ["Jetson Orin Nano", "RealSense D435i", "LiDAR", "PID control", "Python"],
    description:
      "A radio-controlled car rebuilt to drive itself, entered in the World Robotics Olympiad 2025 in Ghana, where it mapped the course and avoided obstacles with nobody at the controls. It fuses LiDAR with an Intel RealSense depth camera on an NVIDIA Jetson Orin Nano, and closes the loop on steering and speed with PID control.",
    image: {
      src: "/portfolio/self_driving_car.jpg",
      alt: "Self-driving RC car",
    },
    youtubeId: "ZGJbFttlH8E",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/team44/tree/main",
        type: "github",
      },
      {
        label: "Autonomous driving demo",
        href: "https://youtu.be/ZGJbFttlH8E",
        type: "youtube",
      },
    ],
  },
  {
    title: "reservation-service",
    year: "2026",
    kind: "software",
    stack: ["TypeScript", "PostgreSQL", "GiST constraints", "Docker", "CI"],
    description:
      "A booking service for things that can only be sold once — a room, a seat, a time slot. Taking bookings is easy; the hard part is what happens when two people claim the last one in the same millisecond. Every booking here passes through a single Postgres GiST exclusion constraint, and a load harness proves it holds rather than assuming it: zero double-bookings across 27,000 concurrent attempts, against 35,966 from an unguarded control group put under identical load.",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/reservation-service",
        type: "github",
      },
      {
        label: "Benchmark results",
        href: "https://github.com/adoodevv/reservation-service/blob/main/bench/RESULTS.md",
        type: "github",
      },
    ],
  },
  {
    title: "link-checker",
    year: "2026",
    kind: "software",
    stack: ["Go", "net/http", "CI", "table-driven tests"],
    description:
      "A command-line tool in Go that crawls a website and reports the links that no longer work, built to run in CI so broken links fail a build instead of reaching visitors. Most of the real work is deciding when two URLs are the same page, which is what tells the crawler when to stop. Early days — currently sequential, with concurrency and the CI exit-code contract next.",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/link-checker",
        type: "github",
      },
    ],
  },
];
