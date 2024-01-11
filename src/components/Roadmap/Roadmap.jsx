import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "December 2023",
      title: "Concept Preparation",
      info: [
        "Solana User Preferences",
        "Competitor Analysis Insights",
        "Community Engagement Planning",
      ],
    },
    {
      roadmapTitle: "Jan - Mar 2024",
      title: "Launch",
      info: [
        "AnonFi Core Refinement",
        "AnonFi Whitepaper Creation",
        "Official AnonFi Launch",
        "Influencers and Marketers onboarding",

      ],
    },

    {
      roadmapTitle: "Mar - Apr 2024",
      title: "Development Phase I",
      info: [
        "AnonFi Infrastructure Initiation",
        "Expert Dev Assembly",
        "Guardian mechanism development",
      ],
    },

    {
      roadmapTitle: "May - Jun 2024",
      title: "Prototype Testing",
      info: [
        "AnonFi Privacy Prototype",
        "Privacy Mechanism Testing",
        "Data traffic insights and reporting",
      ],
    },
    {
      roadmapTitle: "Jul - Aug 2024",
      title: "Enhanced Security Audits",
      info: [
        "Security Audit Engagement",
        "Public test Engagement",
        "Bounty programs",
      ],
    },
    {
      roadmapTitle: "Sep - Oct 2024",
      title: "Testnet Deployment",
      info: [
        "Solana Testnet Deployment",
        "Beta Feedback Refinement",
      ],
    },
    {
      roadmapTitle: "Mid Jan 2025",
      title: "Operational",
      info: [
        "AnonFi Solana Mainnet Launch",
      ],
    },
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUr Roadmap</span>
              <h2 className="title">
                Bigtech Strategy and <br /> Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
