"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { ProgrammingSkills, skillTable } from "./SkillData";
import dynamic from "next/dynamic";

const RadarChart = dynamic(() => import("./RadarChart"), { ssr: false });

const Skills: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-5xl">
        <div className="flex justify-center">
          <RadarChart />
        </div>
        {ProgrammingSkills.map((skillCategory: skillTable, index: number) => (
          <div key={index} className="p-6 transition duration-300 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {skillCategory.skillType}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skillCategory.skill.map((skill, idx) => (
                <div key={idx} className="flex items-center mb-4">
                  {skill.imagePass && (
                    <Image
                      src={skill.imagePass}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain mr-4"
                    />
                  )}
                  <div>
                    <div className="font-bold">{skill.name}</div>
                    <div className="text-sm text-gray-600">{skill.level}</div>
                    <div className="text-sm">{skill.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
