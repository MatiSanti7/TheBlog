import ListProject from "./ListProject";

const Projects = () => {
  return (
    <>
      <hr className="h-0.5 bg-[#2f2f2f]" />
      <h1 className="font-bold text-center 2xl:text-[220px] 2xl:leading-[270px] md:text-[110px] md:leading-[170px] text-6xl">
        PROJECTS
      </h1>
      <hr className="mb-10 h-0.5 bg-[#2f2f2f]" />
      <ListProject></ListProject>
    </>
  );
};

export default Projects;
