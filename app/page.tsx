import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 mx-12 my-auto w-[90%] max-w-[75rem]">
        <div className=" w-[40rem] h-96">{/* slide show images */}</div>
        <div>
          <div className="text-2xl text-[#ddd6cb]">
            {/* hero image */}

            <h1 className=" bg-clip-text text-transparent text-3xl font-bold uppercase  bg-gradient-to-r from-[#f9572a] to-[#ffc905] tracking-[0.15rem]">
              NextLevel food for next level foodies.
            </h1>

            <p>Taste and share food from all over the world</p>
          </div>
          <div className="flex gap-4 text-2xl">
            {/* cta */}
            <Link
              href="/community"
              className=" inline-block mt-4 px-2 py-4 rounded-lg text-white font-bold no-underline"
            >
              Join the community
            </Link>
            <Link
              href="/meals"
              className=" inline-block mt-4 px-2 py-4 rounded-lg text-white font-bold no-underline"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="text-white text-center">
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-48 mx-8 my-auto text-center">
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
        <section>
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
