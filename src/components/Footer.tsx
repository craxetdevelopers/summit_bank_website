import Link from "next/link";
import React from "react";
import Framer from "./Framer";
import { slideUp } from "@/lib/animation";
import Discover from "./Discover";
import { SiFacebook } from "react-icons/si";
import { BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { RiInstagramFill, RiLinkedinBoxFill, RiTiktokFill } from "react-icons/ri";
import Image from "next/image";

export default function Footer() {
  const links = [
    {
      heading: "Personal",
      links: [
        {
          text: "Savings Accounts (Qard)",
          link: "#",
        },
        { text: "Current Account (Qard)", link: "#" },
        { text: "Fixed Account", link: "#" },
        { text: "Savings Account (Mudarabah)", link: "#" },
        { text: "Summit MTD (Mudarabah)", link: "#" },
      ],
    },
    {
      heading: "SME",
      links: [
        {
          text: "Corporate Account (Qard)",
          link: "/business-corporate-account",
        },
        {
          text: "Summit Lease to Own Finance - SLOF (Ijara)",
          link: "/business-summit-lease",
        },
        {
          text: "Customized Investment Plan – CIP",
          link: "/business-customized-investment-plan",
        },
        { text: "Foreign Currency", link: "#" },
      ],
    },
    {
      heading: "Corporate",
      links: [
        {
          text: "Corporate Account (Qard)",
          link: "/corporate-account",
        },
        {
          text: "Summit Cost-Plus - SCP (Murabaha)",
          link: "/corporate-summit-cost-plus",
        },
        {
          text: "Summit Lease to Own Finance - SLOF (Ijara)",
          link: "/corporate-summit-lease",
        },
        {
          text: "Summit Sukuk Investments - SSI",
          link: "/corporate-summit-sukuk-investments",
        },
      ],
    },
    {
      heading: "Finance",
      links: [
        {
          text: "Summit Cost-Plus - SCP (Murabaha)",
          link: "/personal-summit-cost-plus",
        },
        {
          text: "Summit Lease to Own Finance - SLOF (Ijara)",
          link: "/personal-summit-lease",
        },
        { text: "Home finance / Financing", link: "#" },
        { text: "Investment finance / Financing", link: "#" },
      ],
    },
    {
      heading: "Investment",
      links: [
        {
          text: "Summit MTD (Mudarabah)",
          link: "#",
        },
        { text: "Summit Sukuk Investments - SSI", link: "#" },
        { text: "Customized Investment Plan – CIP", link: "#" },
      ],
    },
  ];

  const year = new Date().getFullYear();
  return (
    <>
      <Discover />

      <div className="bg-white w-full max-h-[1200px] lg:h-[70vh] h-full flex items-center">
        <div className="main">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4  py-10">
            {links?.map((item, index) => (
              <div
                className="flex flex-col gap-1 shrink-0 space-y-2"
                key={index}
              >
                <h6 className="pb-5">{item.heading}</h6>
                {item.links.map((data, i) => (
                  <Framer animation={slideUp(i * 0.2)} key={i}>
                    <Link className="footerLink" href={data.link}>
                      {data.text}
                    </Link>
                  </Framer>
                ))}
              </div>
            ))}
          </div>

          <div className="copyright py-5 border-t flex flex-wrap gap-10 lg:gap-2 items-center justify-between">
            <div className="flex lg:items-center flex-col lg:flex-row gap-4 lg:gap-10">
              © {year} Summit Bank Limited
              <a
                href="https://www.cbn.gov.ng/supervision/fi.html?id=9892 
"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo/central-bank-of-nigeria.png"
                  height={60}
                  width={60}
                  alt="cbn"
                />
                Licensed By Central Bank of Nigeria
              </a>
              <div className="socials flex lg:items-center gap-5">
                <a href="#">
                  <SiFacebook size={20} color="blue" />
                </a>
                <a
                  href="https://x.com/SummitBankNG"
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  <BsTwitterX size={20} />
                </a>
                <a
                  href=" https://www.instagram.com/summitbankng1"
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  <RiInstagramFill size={20} />
                </a>
                <a href="https://www.linkedin.com/company/summitbankng"
                referrerPolicy="no-referrer"
                target="_blank"
                >
                  <RiLinkedinBoxFill size={20} color="black" />
                </a>
                <a href="https://www.tiktok.com/@summitbankng"
                referrerPolicy="no-referrer"
                target="_blank"
                >
                  <RiTiktokFill size={20} color="red" />
                </a>
              </div>
            </div>
            <div className="">All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}
