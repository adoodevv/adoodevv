export type ProjectLink = {
  label: string;
  href: string;
  type?: "youtube" | "github" | "external";
};

export type Project = {
  title: string;
  year: string;
  description: string[];
  images: { src: string; alt: string }[];
  youtubeId?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "diff_drive_robot",
    year: "2024",
    description: [
      "A complete ROS 2 Jazzy simulation stack for differential drive robots in Gazebo Harmonic — URDF, lidar integration, keyboard tele-op, and launch files to get a simulated robot running out of the box. The mapping branch adds SLAM Toolbox, EKF-based sensor fusion, and RViz visualization for building maps from live laser scans.",
      "The package has been starred by developers and robotics students worldwide as a starting point for learning autonomous navigation. I'm extending it with Nav2 integration and additional sensors for full-stack navigation tutorials.",
    ],
    images: [
      {
        src: "/portfolio/diff_drive_gazebo.png",
        alt: "Differential drive robot simulation in Gazebo Harmonic",
      },
      {
        src: "/portfolio/diff_drive_rviz.png",
        alt: "SLAM mapping visualization in RViz",
      },
    ],
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
      {
        label: "Mapping branch",
        href: "https://github.com/adoodevv/diff_drive_robot/tree/mapping",
        type: "github",
      },
    ],
  },
  {
    title: "so101_ros2",
    year: "2026",
    description: [
      "A ROS 2 Jazzy stack for the SO-101 robot arm — URDF and meshes, RViz visualization, ros2_control in Gazebo Harmonic, and trajectory control for the arm and gripper in simulation. Includes a pick-and-place world and convenience launch files to go from description to simulated manipulation.",
      "MoveIt 2 motion planning and a hardware interface for the real arm are on the roadmap. The stack is designed to integrate with the broader LeRobot ecosystem for manipulation research and imitation learning.",
    ],
    images: [
      {
        src: "/portfolio/so101_gazebo.png",
        alt: "SO-101 follower arm in Gazebo simulation",
      },
      {
        src: "/portfolio/so101_rviz.png",
        alt: "SO-101 RViz visualization",
      },
    ],
    youtubeId: "o6Ws_Hf_CYc",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/so101_ros2",
        type: "github",
      },
      {
        label: "MoveIt 2 motion planning Demo",
        href: "https://youtu.be/o6Ws_Hf_CYc",
        type: "youtube",
      },
      {
        label: "Gazebo simulation",
        href: "https://github.com/adoodevv/so101_ros2/tree/main/so101_gazebo",
        type: "github",
      },
    ],
  },
  {
    title: "Self-Driving RC Car",
    year: "2025",
    description: [
      "A self-driving RC car with an LiDAR sensor, Intel RealSense D435i and an NVIDIA Jetson Orin Nano. The car is capable of mapping the environment and driving autonomously with Planning and Control algorithms(PID).",
      "This was for the World Robotics Olympiad 2025 in Ghana. The car was able to navigate through the environment and avoid obstacles autonomously.",
    ],
    images: [
      {
        src: "/portfolio/self_driving_car.jpg",
        alt: "Self-driving RC car",
      },
      {
        src: "/portfolio/self_driving_car_demo.png",
        alt: "Self-driving RC car demo",
      },
    ],
    youtubeId: "ZGJbFttlH8E",
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/adoodevv/team44/tree/main",
        type: "github",
      },
      {
        label: "Self-driving RC car demo",
        href: "https://youtu.be/ZGJbFttlH8E",
        type: "youtube",
      }
    ],
  },
];
