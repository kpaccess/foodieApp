"use client";

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className=" border-0 py-3 px-8 text-white rounded-sm cursor-pointer bg-gradient-to-r from-[#f9572a] to-[#ff9b05]"
    >
      {pending ? "Submitting..." : "Share meal"}
    </button>
  );
};

export default MealsFormSubmit;
