import React from "react";
import { FiHelpCircle, FiMail, FiMessageCircle } from "react-icons/fi";

const supportOptions = [
  {
    icon: <FiHelpCircle size={28} />,
    title: "FAQs",
    description: "Find answers to commonly asked questions.",
    link: "#",
  },
  {
    icon: <FiMail size={28} />,
    title: "Email Us",
    description: "Reach out to our support team for help.",
    link: "mailto:support@recipehub.com",
  },
  {
    icon: <FiMessageCircle size={28} />,
    title: "Live Chat",
    description: "Chat with us for quick support.",
    link: "#",
  },
];

const SupportSection = () => {
  return (
    <section className="text-back py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Need Help?
        </h2>
        <p className="text-back text-lg mb-12">
          Our team is here to support you with any questions or issues. Choose a
          method below to get help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              className="p-6 rounded-2xl shadow hover:shadow-lg trans flex flex-col items-center text-center border border-transparent hover:border-primary"
            >
              <div className="text-primary mb-4">{option.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-back">{option.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
