export default function About() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col gap-2 justify-center">
        <h2 className="mx-auto mt-4 text-center text-xl sm:text-2xl">
          This is the <span className="italic">About</span> page.
        </h2>
        <img width="480" height="320"
             className="border border-black mx-auto"
             src="https://source.unsplash.com/qdP8EYxdzL4/480x320"
             alt="A golf club about to strike a golf ball"/>
      </section>
    </main>
  );
}
