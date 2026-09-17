import type { Metadata } from "next";
import Publications from "@/components/Publications";

export const metadata: Metadata = {
  title: "Writing — Jonathan Adoo",
  description: "Notes on robotics, ROS 2 and systems software.",
};

export default function WritingPage() {
  return <Publications />;
}
