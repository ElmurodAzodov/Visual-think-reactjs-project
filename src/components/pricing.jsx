import React from "react";
import "../styles/pricing.scss";

const plans = [
  { name: "Free", price: "$0/month", features: ["2 projects", "No cloud export"] },
  { name: "Starter", price: "$20/month", features: ["10 projects", "Cloud export"] },
  { name: "Pro", price: "$50/month", features: ["Unlimited projects", "Premium support"] },
  { name: "Ultimate", price: "$100/month", features: ["Everything included"] },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="card">
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
