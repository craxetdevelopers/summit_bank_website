"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "../Button";
import { useRouter } from "next/navigation";

export default function Faq({
  title,
  amount,
}: {
  title?: string;
  amount?: number;
}) {
  const router = useRouter();
  const allFaqs = [
    {
      question: "What is non-interest banking?",
      answer:
        "A non-interest digital bank offers financial services that comply with ethical and profit-and-loss sharing principles. We do not charge or pay interest (riba), and our services are structured around transparency, fairness, and social responsibility—delivered entirely through secure digital platforms.",
    },
    {
      question:
        "How is non-interest banking different from conventional banking?",
      answer:
        "Unlike conventional banks, we do not deal in interest-based transactions. Our products are designed around partnerships, trade, and asset-backed financing models, ensuring fairness and shared risk between the bank and its customers.",
    },
    {
      question: "Is this bank the same as an Islamic bank?",
      answer:
        "While both share similar principles (like avoiding interest and promoting ethical finance), a non-interest bank may serve a broader audience, including individuals and businesses who prefer ethical, inclusive finance, regardless of religious affiliation.",
    },
    {
      question: "What products and services does Summit Bank offer?",
      answer:
        "We offer a wide range of digital, interest-free financial services, including:\n\n- Current and savings accounts\n- Non-interest financing for individuals and businesses\n- Mobile banking and digital payments\n- Investment and wealth management solutions (ethically structured)\n- Financial inclusion tools for underserved communities",
    },
    {
      question: "How secure is Summit Bank’s digital platform?",
      answer:
        "We prioritize security and data privacy. Our platforms use end-to-end encryption, multi-factor authentication, and real-time monitoring to protect your transactions and personal information.",
    },
    {
      question: "Can I open an account online?",
      answer:
        "Absolutely YES. Our onboarding process is 100% digital. Simply download our mobile app or visit our website to open an account within minutes—no physical paperwork required.",
    },
    {
      question:
        "How are profits made if the Summit Bank does not charge interest?",
      answer:
        "Our income is derived from ethical investment activities, service charges, trade-based financing, lease contracts, and profit-sharing partnerships, not from interest.",
    },
    {
      question: "Does Summit Bank offer loans and financing?",
      answer:
        "Yes, we provide non-interest financing options such as:\n\n- Asset-backed financing (e.g., Murabaha-like structures)\n- Partnership-based funding (e.g., Mudarabah/Musharrakah-inspired models)\n- Lease-based financing (e.g., Ijarah structures)\n\nThese are structured in a way that promotes shared responsibility and ethical returns.",
    },
    {
      question: "Who can bank with Summit?",
      answer:
        "All persons and entities looking for transparent, fair, and interest-free banking—whether for personal, business, or social purposes—are welcome to join.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "📧 Email: info@summitbankng.com\n📞 Phone: +234 (0) 700 700 0005\n💬 Live chat: Available on our mobile app and website",
    },
  ];

  const handleChange = () => {
    router.push("/faq");
  };

  return (
    <div className="main space-y-6 py-20">
      {!title && (
        <h3 className=" font-semibold text-center mb-6">
          Frequently Asked Questions
        </h3>
      )}
      <div className="space-y-4">
        {(amount ? allFaqs.slice(0, amount) : allFaqs).map((item, index) => (
          <Accordion
            type="single"
            id={item?.question + index}
            collapsible
            key={index}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h5>{item?.question}</h5>
              </AccordionTrigger>
              <AccordionContent>
                <p>{item?.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        {!title && (
          <div className=" flex items-center justify-center">
            <Button type="primary" text="See More" buttonFn={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
