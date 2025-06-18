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
        src="https://www.bhf.org.uk/-/media/images/information-support/heart-matters/2023/november-2023/nutrition/herbs-and-spices/herbs-and-spices-ssnoexp-620x400.jpg?rev=f6c3d1cf57774ffaaabc24a077f59528&la=en&h=400&w=620&hash=6EE751A9196B436355FDB173BB42E025"
        alt=""
      />
      <div className="absolute top-0 left-0 h-full w-screen bg-black/50 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-screen h-full flex justify-center items-center flex-col gap-5 p-[3%]">
        <h1 className="text-3xl text-center lg:text-5xl  md:text-3xl font-medium text-white">
          Welcome to our Recipe Collection!
        </h1>
        <h4 className="md:text-lg text-center text-white">
          Discover mouth watering recipes to satisfy your craving
        </h4>
        <div className="flex rounded">
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
              className="bg-[#ff7023] px-5 py-1 rounded-r cursor-pointer transition text-white duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
