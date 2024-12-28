"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";


const About = () => {
    
  return (
    <div className='min-h-screen bg-[#0F172A]'>
        <TracingBeam className="px-6 bg-[#0F172A]">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className={twMerge("text-xl mb-4")}>
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="400"
                  width="400"
                  className="rounded-lg mb-10 object-cover object-center"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
    </div>
  )
}
const dummyContent = [
    {
      title: "ABOUT DEVELOPER CLUB",
      description: (
        <>
          <p>
          The Developer Club aims to foster a coding culture within
          the department by improving coding skills, promoting
          coding among non-coders, and enhancing student
          participation through regular coding sessions and
          competitions.
          </p>
          <p>
            Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
            veniam in commodo id reprehenderit adipisicing. Proident duis
            exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
          </p>
          <p>
            Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
            reprehenderit deserunt amet laborum consequat adipisicing officia qui
            irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
            Amet culpa officia aliquip deserunt veniam deserunt officia
            adipisicing aliquip proident officia sunt.
          </p>
        </>
      ),
      badge: "About",
      image:
        "/logo.jpeg",
    },
    {
      title: "OUR GOALS",
      description: (
        <div className="flex flex-col space-y-4">
          <p>
          <span className=" font-bold text-green-500">Identify Coders : </span>Identifying and empowering top coders through
          challenging and dynamic coding competitions.
          </p>
          <p>
          <span className=" font-bold text-red-500"> Inspire Non-Coders:</span> Motivate non-coders by creating beginner-friendly
          content and peer support groups.
          </p>
          <p>
          <span className=" font-bold text-green-500">Competitions & Challenges:</span> To provide platform for competitive
          programming.
          </p>
          <p>
          <span className=" font-bold text-red-500">Opportunities for Growth:</span> To benefit students with opportunities in
          upcoming events, placements, internships via expert mentoring
          </p>
        </div>
      ),
      badge: "Goals",
      image:
        "/img1.jpg",
    },
    {
      title: "BENEFITS",
      description: (
        <div className="flex flex-col space-y-4">
          <p>
          <span className=" font-bold text-green-500">Improve Coding Skills: </span>A visible improvement in coding skills
            among members.

          </p>
          <p>
          <span className=" font-bold text-red-500"> Active Participation:</span> Increased participation of students in coding
          competitions and events.
        </p>
          <p>
          <span className=" font-bold text-green-500">Inspire New Coders:</span> Opportunity to inspire non-coders to learn
        coding.

          </p>
          <p>
          <span className=" font-bold text-red-500">Preparation for Industry:</span> TMembers will be better prepared for
          technical interviews and coding competitions.
          </p>
        </div>
      ),
      badge: "Benefits",
      image:
        "/img4.jpg",
    },
  ];
export default About;
