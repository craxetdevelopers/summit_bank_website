"use client";
import Framer from "@/components/Framer";
import SectionHero from "@/components/generalHero/SectionHero";
import DefaultLayout from "@/components/layout/DefaultLayout";
import GenericSection from "@/components/section/GenericSection";
import { fadeInLetters, slideUp } from "@/lib/animation";
import React from "react";
import AllProfiles from "../../components/profiles/AllProfiles";

export default function About() {
  const heroData = {
    title: "Transforming money, trade, and lives.",
    text: "Whether you're saving for the future, growing your business, or looking for everyday financial convenience, we’re here to support your journey—ethically and intelligently.",
    image: "/pages-section/about.jpg",
    subtitle: "Governance",
  };

  const standSection = {
    title: "Summit Values",
    // image: "/pages-section/stand.png",
  };

  const mission = {
    subtitle: "Our Mission",
    text: "To be the trusted partner, providing ethical banking solutions that empower individuals and communities while making a positive impact in the lives of stakeholders for a prosperous society. ",
    // image: "/pages-section/mission.jpeg",
  };
  const values = [
    "Stewardship. We are accountable and responsible",
    "Unity. We are collaborative and respectful",
    "Moral integrity. We are honest and trustworthy",
    "Mastery. We are excellent and professional",
    "Innovation. We are dynamic and creative",
    "Transparency. We are ethical and sincere",
    "Boldness. We are confident and courageous",
    "Authenticity. We are real and sincere",
    "Nobility. We are selfless and fair",
    "Keenness. We are enthusiastic and passionate",
  ];

  const vision = {
    subtitle: "Our Vision",
    text: "To be the leading ethical bank, supporting our stakeholders for common growth and prosperity. ",
  };
  return (
    <div>
      <DefaultLayout>
        {/* <SectionHero
          subtitle={heroData?.subtitle}
          title={heroData?.title}
          text={heroData?.text}
          image={heroData?.image}
        /> */}

        <div className="main py-20 !pt-[160px]">
          <div className="grid md:grid-cols-[5fr_7fr] space-y-6">
            <div className="h-fit">
              <Framer animation={slideUp(0.8)}>
                <h3 className="">Our History</h3>
              </Framer>
            </div>
            <Framer animation={slideUp(0.6)}>
              <p>
                Summit Bank Ltd was incorporated as a limited liability company
                licensed to provide non- interest banking services to the
                Nigerian public in July 2024. The Bank commenced operations in
                May 2025, and has since then grown to become one of the most
                efficient digital and service focused banks in Nigeria.
              </p>
            </Framer>
          </div>
        </div>
        <div className="grid main lg:grid-cols-2">
          <GenericSection
            customClass={"!grid-cols-1 ml-[-40px] md:!ml-[-60px]"}
            title={standSection?.title}
            // image={standSection?.image}
          >
            <div className="space-y-3">
              {values?.map((item, i) => (
                <Framer animation={fadeInLetters(i)} key={i}>
                  <li
                    key={i}
                    className="list-none flex items-center flex-wrap gap-1"
                  >
                    <div className="font-bold mr-2 bg-secondary-color w-[35px] flex items-center justify-center text-white h-[35px] rounded-md">
                      {item.charAt(0)}
                    </div>
                    <div className="text-secondary-color font-bold">
                      {item.split(".")[0]}.
                    </div>
                    {item.split(".")[1]}
                  </li>
                </Framer>
              ))}
            </div>
          </GenericSection>
          <div className="">
            <SectionHero
              subtitle={mission?.subtitle}
              text={mission?.text}
              textClass={"lg:!text-left lg:w-[600px]"}
              // image={mission?.image}
              // imageClass={" !object-top"}
              customClass={
                " lg:!text-left !text-2xl md:!text-3xl lg:!text-4xl leading-[1.3]"
              }
              mainClass={"!mt-[100px] !justify-start"}
            />
            <SectionHero
              subtitle={vision?.subtitle}
              text={vision?.text}
              textClass={"lg:!text-left lg:w-[600px]"}
              customClass={" lg:!text-left  !text-2xl md:!text-3xl lg:!text-4xl leading-[1.3]"}
               mainClass={"!mt-[100px] !justify-start"}
            />
          </div>
        </div>

        <AllProfiles />
      </DefaultLayout>
    </div>
  );
}
