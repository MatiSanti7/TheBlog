import PropTypes from "prop-types";
import dataProjects from "../../../allProjects.json";

const Project = ({ index }) => {
  const { title, image, description, categories } = dataProjects[index];

  return (
    <div className="h-min">
      <img src={image} alt="" className="object-cover w-full xl:h-1/2 h-1/3" />
      <div>
        <a href="#" className="flex items-start justify-between mt-4">
          <h3 className="w-11/12 py-2 text-3xl font-semibold">{title}</h3>
          <i className="pt-2 text-3xl fa-solid fa-up-right-from-square"></i>
        </a>
        <p className="text-[22px] text-[#667085] font-normal mb-6">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {categories.map((cat, index) => {
            const numRandom = Math.floor(Math.random() * 8) + 1;
            return (
              <li className={`text-base cat color-${numRandom}`} key={index}>
                {cat}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Project.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Project;
