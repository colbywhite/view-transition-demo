export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col justify-center gap-2">
        <h2 className="mx-auto mt-4 text-center text-xl sm:text-2xl">
          This is the <span className="italic">About</span> page.
        </h2>
        <img
          width="480"
          height="320"
          className="mx-auto border border-black"
          src="https://source.unsplash.com/qdP8EYxdzL4/480x320"
          alt="A golf club about to strike a golf ball"
        />
      </section>
    </main>
  );
}
