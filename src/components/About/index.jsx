import photo from "../../assets/img/about.png";

const index = () => {
  return (
    <>
      <hr className="h-0.5 bg-[#2f2f2f]" />
      <h1 className="font-bold text-center 2xl:text-[220px] 2xl:leading-[270px] md:text-[110px] md:leading-[170px] text-6xl">
        John Doe
      </h1>
      <hr className="mb-10 h-0.5 bg-[#2f2f2f]" />
      <img src={photo} alt="" />
      <div className="flex flex-col gap-6 mt-10">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">About Me</h2>
          <p className="text-lg">
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Skills:</h2>
          <ul className="ml-5">
            <li className="text-lg list-disc">
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </li>
            <li className="text-lg list-disc">
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </li>
            <li className="text-lg list-disc">
              Excellent visual design skills, with a strong understanding of
              layout, color theory, and typography
            </li>
            <li className="text-lg list-disc">
              Ability to create wireframes and prototypes to communicate design
              concepts
            </li>
            <li className="text-lg list-disc">
              Strong communication and collaboration skills, with the ability to
              work effectively with cross-functional teams
            </li>
            <li className="text-lg list-disc">
              Experience conducting user research and gathering insights to
              inform design decisions
            </li>
            <li className="text-lg list-disc">
              Proficiency in HTML, CSS, and JavaScript
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Experience:</h2>
          <ul className="ml-5">
            <li className="text-lg list-disc">
              5 years of experience as a UI designer, working on a variety of
              projects for clients in the tech and retail industries
            </li>
            <li className="text-lg list-disc">
              Led the design of a successful e-commerce website, resulting in a
              25% increase in online sales
            </li>
            <li className="text-lg list-disc">
              Created wireframes and prototypes for a mobile banking app,
              leading to a 20% increase in app usage
            </li>
            <li className="text-lg list-disc">
              Conducted user research and usability testing to inform the
              redesign of a healthcare provider`s website, resulting in a 15%
              increase in website traffic
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Education:</h2>
          <ul className="ml-5">
            <li className="text-lg list-disc">
              Bachelor`s degree in Graphic Design
            </li>
            <li className="text-lg list-disc">
              Certified User Experience Designer (CUED)
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default index;
