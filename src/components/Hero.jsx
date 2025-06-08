import { useForm } from "react-hook-form";

const Hero = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    onSearch(data.search); // send search text to parent
  };
  return (
    <section className="min-h-[60vh] relative">
      <img
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src="https://p.kindpng.com/picc/s/630-6301417_salmon-steak-png-transparent-png.png"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-screen bg-black opacity-30 pointer-events-none "></div>

      <div className="absolute top-0 left-0 w-screen h-full flex justify-center items-center flex-col gap-5 p-[3%]">
        <h1 className="text-3xl text-center lg:text-5xl  md:text-3xl font-medium text-white">
          Welcome to our Recipe Collection!
        </h1>
        <h4 className="md:text-lg text-center text-white">
          Discover mouth watering recipes to satisfy your craving
        </h4>
        <div className="flex border rounded">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex border rounded bg-none text-white"
          >
            <input
              className="px-5 py-1 outline-0 text-lg"
              placeholder="Search recipe"
              {...register("search")}
            />
            <button
              type="submit"
              className="bg-[#ff7023] px-5 py-1 rounded-r cursor-pointer transition duration-300"
            >
              Search
            </button>
          </form>
          {/* <input
            className="px-5 py-1 outline-0"
            type="text"
            placeholder="Search recipe"
          />
          <button className="bg-[#F4722B] px-5 py-1 rounded cursor-pointer">
            Search
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
