"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { projectsData } from "../app/data";

export default function Projects() {
  return (
    <section className="my-56 flex flex-col items-center" id="projects">
      <h1 className="font-bold text-9xl mb-10">Projects</h1>
      <div className="mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projectsData.map((project) => (
          <Card key={project.id}>
            <CardHeader>{project.title}</CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt={`${project.title} Image`}
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
              />
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
