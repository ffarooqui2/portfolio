"use client";
import { skillsData } from "@/app/data";
import React from "react";
import { Badge } from "./ui/badge";
import { MotionLI } from "./MotionListItem";
import { Card } from "./ui/card";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills() {
  return (
    <section className="my-52 text-center mx-auto" id="skills">
      <h1 className="font-bold text-3xl mb-10">My Skills</h1>
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
        {skillsData.map((skill, index) => (
          <MotionLI
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Card className="px-3 py-2">{skill}</Card>
          </MotionLI>
        ))}
      </ul>
    </section>
  );
}
