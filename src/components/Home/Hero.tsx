const Hero = () => {
  return (
    <section aria-label="Hero" className="max-w-[1200px] w-full">
      <h1 className="text-3xl font-bold">Hero Title</h1>
      <div className="flex mt-6 gap-7">
        <div className="h-52 w-52 bg-secondary rounded-lg"></div>
        <p className="mt-3">Hero description.</p>
      </div>
    </section>
  );
};

export default Hero;
