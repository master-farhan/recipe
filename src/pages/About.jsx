const About = () => {
  return (
    <section className="p-[3%]">
      <div className="flex gap-[5%] flex-col-reverse md:flex-row">
        <div className="md:w-[55vw]">
          <h2 className="text-4xl font-bold my-5 text-primary">About Me</h2>
          <p className="text-lg leading-relaxed mb-5">
            Hello! I'm <span className="font-semibold">MD Farhan Sadik</span>, a
            passionate front-end web developer from Bangladesh. I love turning
            creative ideas into beautiful, functional user interfaces. I started
            my web development journey with Sheriyans Coding School, and I've
            been continuously learning and building exciting projects.
          </p>
        </div>
        <div className="md:w-[40vw]">
          <img
            className="w-full rounded"
            src="https://media.istockphoto.com/id/1419416519/photo/handsome-mature-man-tasting-the-food-he-is-preparing-in-the-kitchen-at-home.jpg?s=612x612&w=0&k=20&c=DazgoG8R7zxI7jSxtJExbua8JXH9KhzpCcGvkjYmBaw="
            alt=""
          />
        </div>
      </div>
      <div className="my-10">
        <p className="text-lg leading-relaxed mb-6">
          I created this recipe website not just to share delicious dishes, but
          also to showcase how coding can blend with creativity. Whether you're
          a food lover or a fellow developer, I hope you find inspiration here.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Want to see more of my work? Check out my portfolio!
        </p>

        <a
          href=" https://master-farhan.github.io/studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  text-back px-6 py-2 rounded font-semibold bg-primary trans hover:bg-primary/90"
        >
          Visit My Portfolio
        </a>
      </div>
    </section>
  );
};

export default About;
