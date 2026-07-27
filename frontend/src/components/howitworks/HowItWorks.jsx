import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Create Workspace",
    desc: "Sign up and create your workspace in seconds.",
  },
  {
    number: "02",
    title: "Manage Tasks",
    desc: "Assign tasks, collaborate and stay organized.",
  },
  {
    number: "03",
    title: "Launch Projects",
    desc: "Track progress and deliver projects faster.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <span className="section-badge">How It Works</span>

      <h2>
        Get Started in <span>3 Simple Steps</span>
      </h2>

      <p className="section-text">
        Start using TaskFlow in just a few minutes.
      </p>

      <div className="steps">
        {steps.map((step) => (
          <div className="step" key={step.number}>
            <div className="step-icon">{step.number}</div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
