import ImageSlideShow from "@/components/images/image-slideshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 mx-auto my-12 w-[90%] max-w-[75rem]">
        <div className=" w-[40rem] h-[25rem]">
          {/* slide show images */}
          <ImageSlideShow />
        </div>
        <div>
          <div className="text-2xl text-[#ddd6cb]">
            {/* hero image */}

            <h1 className=" bg-clip-text text-transparent text-3xl font-bold uppercase  bg-gradient-to-r from-[#f9572a] to-[#ffc905] tracking-[0.15rem]">
              NextLevel food for next level foodies.
            </h1>

            <p className=" mt-4">
              Taste and share food from all over the world
            </p>
          </div>
          <div className="flex gap-4 text-2xl">
            {/* cta */}
            <Link
              href="/community"
              className=" inline-block bg-clip-text text-transparent  bg-gradient-to-r from-[#f9572a] to-[#ffc905] mt-4 py-2 rounded-lg text-[#ff9b05] no-underline bg-transparent px-0"
            >
              Join the community
            </Link>
            <Link
              href="/meals"
              className=" inline-block mt-4 py-2 px-4 rounded-lg  bg-gradient-to-r from-[#f9572a] to-[#ffc905] font-bold no-underline"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] mx-auto my-8 text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] mx-auto my-8 text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
