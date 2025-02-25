import React from "react";
import PriceOptionCard from "./PriceOptionCard";

const PriceOptions = () => {
  const priceData = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Open gym hours only",
        "No personal trainer",
        "No group classes",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      features: [
        "Full access to gym equipment",
        "Locker room & shower access",
        "Includes group fitness classes",
        "One free personal training session per month",
        "Access to gym during peak hours",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80,
      features: [
        "24/7 gym access",
        "All group fitness classes included",
        "Unlimited personal training sessions",
        "Sauna & steam room access",
        "Free protein shake per visit",
      ],
    },
    {
      id: 4,
      name: "Couples Membership",
      price: 90,
      features: [
        "Full access for two people",
        "All group classes included",
        "One personal training session per person per month",
        "Sauna & steam room access",
        "Discount on gym merchandise",
      ],
    },
    {
      id: 5,
      name: "VIP Membership",
      price: 120,
      features: [
        "Unlimited 24/7 gym access",
        "Private locker with laundry service",
        "Priority booking for personal trainers",
        "All group & specialized classes included",
        "Access to exclusive member events",
        "Complimentary nutrition consultation",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-3xl">Best Price </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {priceData.map((pd) => (
          <PriceOptionCard key={pd.id} priceData={pd}></PriceOptionCard>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
