// import { useForm } from "react-hook-form";

const Hero = ({ onSearch }) => {
  // const { register, handleSubmit } = useForm();

  // const submit = (data) => {
  //   onSearch(data.search); // send search text to parent
  // };
  
  return (
    <section className="min-h-[60vh] relative">
      <img
        className="absolute top-0 left-0 w-screen h-full object-cover"
        src="https://media.istockphoto.com/id/1089479972/photo/grilled-chicken-fillet-with-green-vegetable-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=7IROjAAsP48YtePAvkmgLJOG_SnoYngu82FSe3PEs8o="
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-screen bg-black/50 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-screen h-full flex justify-center items-center flex-col gap-5 p-[3%]">
        <h1 className="text-3xl text-center lg:text-5xl  md:text-3xl font-medium text-white">
          Welcome to our Recipe Collection!
        </h1>
        <h4 className="md:text-lg text-center  font-semibold text-white">
          Discover mouth watering recipes to satisfy your craving
        </h4>
        {/* <div className="flex rounded">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex rounded bg-none bg-white"
          >
            <input
              className="text-black border-none px-5 py-1 outline-0 text-lg w-50 sm:w-60"
              placeholder="Search recipe"
              {...register("search")}
            />
            <button
              type="submit"
              className="bg-primary px-5 py-1 rounded-r cursor-pointer transition text-white duration-300"
            >
              Search
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
