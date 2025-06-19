import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    title: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "RecipeHub has transformed the way I cook! The easy-to-follow recipes and beautiful layout make it my go-to site.",
  },
  {
    id: 2,
    name: "Rafiul Hasan",
    title: "Home Chef",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "I love the variety of dishes available. The site is fast, responsive, and filled with flavor-packed ideas.",
  },
  {
    id: 3,
    name: "Tania Akter",
    title: "Food Lover",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Thanks to RecipeHub, cooking at home has become fun and stress-free. Highly recommended!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          What Our Users Say
        </h2>
        <p className="text-back text-lg mb-12">
          Hear from food lovers and home chefs who use RecipeHub every day.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, title, image, quote }) => (
            <div
              key={id}
              className="bg-grow rounded-xl p-6 shadow hover:shadow-lg border border-transparent hover:border-primary trans"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{name}</h3>
                  <p className="text-sm text-back">{title}</p>
                </div>
              </div>
              <p className="text-back text-sm leading-relaxed italic">
                "{quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
