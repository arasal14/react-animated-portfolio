import { ACADEMICS } from "../constants";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl"
      >
        Education
      </motion.h1>
      <div>
        {ACADEMICS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-1/4"
            >
              <h2 className="mb-2 font-semibold text-xl">{item.stream}</h2>
              <h1 className="mb-2 text-md">{item.Ename}</h1>
              <p className="mb-4 text-sm text-neutral-400">{item.city}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
