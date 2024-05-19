import { WorkSlider } from '../../components/WorkSlider';
import { Bulb } from '../../components/Bulb';
import { Circles } from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Projects = () => {
    return (
        <div className={ `h-full py-36 flex items-center mt-16` }>
            <Circles />

            <div className={ `container mx-auto` }>
                <div className={ `flex flex-col xl:flex-row gap-x-8` }>
                    <div className={ `text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0` }>
                        <motion.h2
                            variants={ fadeIn('up', 0.2) }
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className={ `h2 xl:mt-8` }
                        >
                            My projects
                        </motion.h2>

                        <motion.p
                            variants={ fadeIn('up', 0.2) }
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className={ `p xl:mt-8` }
                        >
                            I've developed innovative projects like Sociaza for social networking, Trillo for travel booking, Nexter for real estate, Natours for adventure tours, and AutoQA for automated testing. Each project showcases my dedication to user-centric design and cutting-edge technology.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={ fadeIn('down', 0.6) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `w-full xl:max-w-[65%]` }
                    >
                        <WorkSlider />
                    </motion.div>
                </div>
            </div>

            <Bulb />
        </div>
    );
};

export default Projects;