export default function Index() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col justify-center gap-2">
        <h2 className="mx-auto mt-4 text-center text-xl sm:text-2xl">
          This is the <span className="italic">Home</span> page.
        </h2>
        <img
          width="480"
          height="320"
          className="mx-auto border border-black"
          src="https://source.unsplash.com/N21z4eG8aKg/480x320"
          alt="A golf ball on the adege of a golf hole"
        />
      </section>
    </main>
  );
}
