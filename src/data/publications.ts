export type Author = {
  name: string;
  isSelf?: boolean;
};

export type Publication = {
  title: string;
  href: string;
  venue: string;
  authors: Author[];
};

export const publications: Publication[] = [
  {
    title: "Simulating and Building Robots with ROS 2",
    href: "https://adoodevv.hashnode.dev/",
    venue:
      "adoodevv.hashnode.dev · Mobile Robots with ROS 2 Jazzy & Gazebo Harmonic",
    authors: [{ name: "Jonathan Adoo", isSelf: true }],
  },
];
