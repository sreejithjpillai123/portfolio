import React from "react";
import { motion } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  ExtraCurricular,
  Footer,
  Projects,
  BlogPosts,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <motion.section
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart} pt-[80px]`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <SkillsAndExperience />
            <Education />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <BlogPosts enabled={false} />
            
            <ExtraCurricular />
          </div>
        </div>

        <Footer />
      </motion.section>
    </div>
  );
};

export default App;
