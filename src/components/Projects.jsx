import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded"
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h2 className="mb-2 font-semibold text-xl">{item.title}</h2>
              <h1 className="mb-2 text-md text-neutral-400">
                {item.description}
              </h1>
              {item.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-900"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
