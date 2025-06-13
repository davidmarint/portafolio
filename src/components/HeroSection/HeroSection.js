import React, { useEffect, useState } from "react";
import BackgroundElements from "./BackgroundElements";
import HeroTitle from "./HeroTitle";
import TypewriterSubtitle from "./TypewriterSubtitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import ScrollArrow from "./ScrollArrow";
import { gradients, accentColors } from "../../utils/gradientConfig";
import { socialLinksData } from "../../data/socialLinksData";
import { scrollToSection } from "../../utils/navigationHelpers";

const HeroSection = ({ gradientType = 1 }) => {
  const heroData = {
    name: "David Marin",
    subtitle: "Desarrollador Full-Stack Móvil & Web",
    description:
      "Creo experiencias digitales impactantes que funcionan perfectamente en cualquier dispositivo, combinando diseño atractivo con tecnologías modernas para impulsar tu presencia en línea.",
    cvUrl:
      "https://drive.google.com/file/d/1c77b6Orx6sYT8FnxQIqi7nBB9d7NrFsf/view",
  };

  const handleContactClick = () => scrollToSection("contact");
  const handleScrollDown = () => scrollToSection("skills");

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center ${gradients[gradientType]} text-white px-4 relative overflow-hidden`}
    >
      <BackgroundElements />
      <div className="max-w-4xl mx-auto text-center z-10">
        <HeroTitle
          name={heroData.name}
          accentColor={accentColors[gradientType]}
        />
        <TypewriterSubtitle text={heroData.subtitle} />
        <HeroDescription description={heroData.description} />
        <HeroButtons
          gradientType={gradientType}
          onContactClick={handleContactClick}
          cvUrl={heroData.cvUrl}
        />
        <SocialLinks links={socialLinksData} />
      </div>
      <ScrollArrow onClick={handleScrollDown} />
    </section>
  );
};

export default HeroSection;
