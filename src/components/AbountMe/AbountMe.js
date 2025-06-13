import React, { useEffect, useState } from "react";
import ExperienceSection from "./ExperienceSection";
import { useObserver } from "../../hooks/useObserver";
import { themes } from "../../utils/themesAbount";
import { skills } from "../../data/AbountMe/skills";
import BackgroundElements from "./BackgrountdElements";
import AboutTitle from "./AbountTitle";
import CardInfo from "./CardInfo";
import PersonDescription from "./PersonDescription";
import Motivation from "./Motivation";
import SkillsSection from "./SkillsSection";
import CallToAction from "./CallToAction";

const AboutSection = ({ theme = "light" }) => {
  const isVisible = useObserver("about");
  const currentTheme = themes[theme];

  return (
    <section
      id="about"
      className={`py-20 ${currentTheme.bg} ${currentTheme.text} relative overflow-hidden`}
    >
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AboutTitle currentTheme={currentTheme} isVisible={isVisible} />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <CardInfo isVisible={isVisible} currentTheme={currentTheme} />

          <div
            className={`space-y-8 ${
            "animate-slide-in-right" 
            }`}
          >
            <PersonDescription currentTheme={currentTheme} />

            <Motivation currentTheme={currentTheme} />
          </div>
        </div>

        <ExperienceSection />

        <SkillsSection
          currentTheme={currentTheme}
          isVisible={isVisible}
          skills={skills}
        />

        <CallToAction currentTheme={currentTheme} isVisible={isVisible} />
      </div>
    </section>
  );
};

export default AboutSection;
