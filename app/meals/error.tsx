"use client";
const Error = ({ error }: { error: Error }) => {
  return (
    <main className=" mt-20 text-center">
      <h1 className=" text-7xl m-0 font-black  uppercase text-transparent bg-clip-text  bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-center font-sans">
        An Error occured - {error.message}
      </h1>
      <p className=" text-2xl font-medium text-[#ddd8d8] mt-3">
        Failed to fetch meal data. Please try again later.
      </p>
    </main>
  );
};

export default Error;
