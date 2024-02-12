const About = () => {
  return (
    <div className="container mx-auto">
      <section className="bg-primary flex flex-col space-y-8 p-8 items-center">
        <div className="flex flex-col-reverse md:flex-row space-x-4 items-center">
          <div className="flex flex-col space-y-4 mt-10">
            <strong className="text-md font-bold text-center md:text-xl md:text-left">
              Make an impact with FreeGraphics
            </strong>
            <p className="text-sm text-center md:text-lg md:text-left">
              We are the one-stop platform for all the content, inspiration, and
              solutions you need to create designs faster, easier, and better.
            </p>
          </div>
          <img
            src="assests/image3.webp"
            alt="about"
            className="w-1/2 md:w-1/4 rounded-lg"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row space-x-4 items-center">
          <div className="flex flex-col space-y-4 mt-10">
            <strong className="text-md text-center md:text-xl font-bold md:text-left">
              We are creative inspiring fun accesible
            </strong>
            <p className="text-sm text-center md:text-lg md:text-left">
              We always think outside the box and we’re building a design
              community, where creativity meets convenience. We’re your
              versatile hub with multiple design experiences —all in one place.
            </p>
          </div>
          <img
            src="assests/image3.webp"
            alt="about"
            className="w-1/2 md:w-1/4 rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
