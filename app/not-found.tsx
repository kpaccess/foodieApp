import { montserrat } from "./fonts";
const NotFound = () => {
  return (
    <main className="mt-20 text-center">
      <h1
        className={`text-7xl m-0 font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-center  ${montserrat.className} font-sans`}
      >
        Meal Not found
      </h1>
      <p className="text-2xl font-medium text-[#ddd8d8] mt-8">
        Unfortubately, we could not find the requested page or meal data.
      </p>
    </main>
  );
};

export default NotFound;
