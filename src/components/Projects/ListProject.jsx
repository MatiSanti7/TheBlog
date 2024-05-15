import Project from "./Project";

const ListProject = () => {
  return (
    <div className="h-min">
      <h2 className="pb-8 text-2xl font-semibold">List Project</h2>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Project index={0}> </Project>
          <Project index={1}> </Project>
        </div>
        <Project index={2}> </Project>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Project index={3}> </Project>
          <Project index={4}> </Project>
        </div>
      </div>
    </div>
  );
};

export default ListProject;
