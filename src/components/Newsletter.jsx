import React from "react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে তুমি Web3Forms / EmailJS বা অন্য API যুক্ত করতে পারো
    alert("Thank you for subscribing!");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          📬 Subscribe for Weekly Recipes
        </h2>
        <p className="text-back mb-6 sm:text-lg">
          Join our food lover community and get delicious recipes delivered to
          your inbox every week!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-accent  focus:border-primary outline-none w-full md:w-70"
            required
          />
          <button
            type="submit"
            className="bg-primary font-semibold hover:text-primary text-back px-6 py-2 rounded-lg border border-transparent hover:border-primary hover:bg-accent/50 trans cursor-pointer
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
