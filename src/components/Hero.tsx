import Image from "next/image";
import profilePic from "../../public/hero-faaiz.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="grid grid-cols-8 gap-5" id="hero">
      {/* Left Side */}
      <div className="col-span-5 flex flex-col justify-between">
        <h1 className="font-bold text-4xl mb-6">
          Hi! Im Faaizuddin, a full-stack developer based in Chicago
        </h1>
        <div>
          <p className="text-base mb-4">
            I build helpful, pixel-perfect, engaging applications.
          </p>
          <p className="text-base mb-4">
            Im a junior at the University of Illinois at Chicago majoring in
            Computer Science while I also been given the opportunity to help
            teach core computer science courses as an undergraduate teaching
            assistant.{" "}
          </p>
          <p className="text-base mb-4">
            At the end of June 2024, I had the opportunity to intern at a
            healthcare startup company based in Brooklyn, NY called Panacea
            where I worked on building multiple features now in production using
            Next.js, React, Typescript, Tailwind CSS, and Graph QL.
          </p>
          <p className="text-base mb-4">
            Through these experiences, Ive developed a working style that leans
            towards flexibility, clarity, and collaboration.
          </p>
          <p className="text-base mb-4">
            Im currently seeking an software engineering internship. Hire me?
          </p>
        </div>
        <div className="col-span-3">
          <Button className="mr-5" size={"lg"}>
            <Link
              href="https://www.linkedin.com/in/faaizuddinf/"
              target="_blank"
            >
              View LinkedIn
            </Link>
          </Button>
          <Button className="" variant={"outline"} size={"lg"}>
            <Link href="https://github.com/ffarooqui2" target="_blank">
              View Github
            </Link>
          </Button>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-3">
        <Image
          className="rounded-xl drop-shadow-2xl"
          placeholder="blur"
          src={profilePic}
          alt="Picture of Faaizuddin"
          style={{
            objectFit: "fill",
          }}
        ></Image>
      </div>
    </section>
  );
}
