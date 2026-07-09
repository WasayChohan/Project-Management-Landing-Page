import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals getting started.",
    features: [
      "Unlimited Tasks",
      "2 Team Members",
      "Basic Analytics",
      "Email Support",
    ],
    active: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best choice for growing teams.",
    features: [
      "Unlimited Projects",
      "Unlimited Members",
      "Advanced Analytics",
      "Priority Support",
      "AI Assistant",
    ],
    active: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "Advanced features for large businesses.",
    features: [
      "Everything in Pro",
      "Dedicated Manager",
      "Custom Integrations",
      "Advanced Security",
      "24/7 Support",
    ],
    active: false,
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <span className="pricing-badge">Pricing</span>

      <h2>
        Choose Your <span>Perfect Plan</span>
      </h2>

      <p className="pricing-text">
        Flexible pricing for individuals, startups and enterprises.
      </p>

      <div className="pricing-cards">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={plan.active ? "pricing-card active" : "pricing-card"}
          >
            {plan.active && <div className="popular">Most Popular</div>}

            <h3>{plan.name}</h3>

            <div className="price">
              {plan.price}
              <span>{plan.period}</span>
            </div>

            <p>{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FaCheck />
                  {feature}
                </li>
              ))}
            </ul>

            <button>{plan.active ? "Start Free Trial" : "Get Started"}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
