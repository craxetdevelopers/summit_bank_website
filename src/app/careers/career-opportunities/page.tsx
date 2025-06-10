"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenericHero from "@/components/generalHero/GenericHero";
import Framer from "@/components/Framer";
import { slideUp } from "@/lib/animation";

export default function CareerOpportunitiesPage() {
  return (
    <main className="min-h-screen">
      <Header scrollState={false} />
      <GenericHero
        title="Career Opportunities"
        subtitle="Explore exciting career paths at Summit Bank."
        breadcumb={["Home", "Careers", "Career Opportunities"]}
      />
      <div className="main py-20">
        <Framer animation={slideUp(0.6)}>
          <h2 className="text-3xl font-bold mb-6">Where Innovation Meets Integrity</h2>
          <p className="text-lg mb-4">
          At our non-interest digital bank, we’re building the future of ethical finance—one that combines cutting-edge technology with value-driven banking. We offer dynamic career opportunities for individuals who are passionate about making a meaningful impact in the financial services industry while upholding principles of transparency, fairness, and financial inclusion. 
          </p>
          <p className="text-lg mb-4">
          Whether you're a tech enthusiast, finance professional, compliance expert, or customer experience specialist, you'll find a place here to grow, innovate, and lead
          </p>
          <p className="text-lg mb-4">
            Explore our current open positions and find your next career opportunity with us.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Why Join Us?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Work in a fast-paced digital environment</li>
              <li>Be part of a mission to deliver interest-free, ethical banking solutions</li>
              <li>Collaborate with talented, purpose-driven teams</li>
              <li>Access continuous learning, mentorship, and leadership development</li>
              <li>Contribute to financial empowerment and sustainable growth</li>
            </ul>
          </div>
          <p className="text-lg mt-6">
          We're looking for bold thinkers and ethical leaders who are ready to shape the future of finance—with purpose, passion, and innovation 
          </p>
          <p className="mt-4">
            <a href="mailto:careers@summitbank.com" className="text-secondary-color hover:underline">
              careers@summitbank.com
            </a>
          </p>
        </Framer>
      </div>
      <Footer />
    </main>
  );
} 