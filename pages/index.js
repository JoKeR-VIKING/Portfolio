import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import {
    HiArrowRight
} from 'react-icons/hi2';

import { ParticlesContainer } from '../components/ParticlesContainer';
import { ProjectsBtn } from '../components/ProjectsBtn';
import { Avatar } from '../components/Avatar';

const Home = () => {
    return (
        <div className={ `bg-primary/60 h-full` }>
            <div className={ `w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ` }>
                <div className={ `text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto` }>
                    <motion.h2
                        variants={ fadeIn('down', 0.2) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `h2 mb-8` }
                    >
                        Transforming Ideas <br /> Into{ ' ' }
                        <span className={ `text-accent` }>Digital Reality</span>
                    </motion.h2>

                    <motion.div
                        variants={ fadeIn('down', 0.3) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `h3 mb-10 xl:mb-8 text-accent after:transition-all after:duration-100 cursor-pointer capitalize xl:text-lg 
                            relative after:w-24 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 flex items-center z-10`
                        }
                        onClick={() => {
                            window.open('https://drive.google.com/file/d/1frxFVrmVybyxZQimInIgZCkqxthLjJ24/view', '_blank');
                        }}
                    >
                        <h3 className={ `mr-2.5` }>
                            Check my Resume
                        </h3>

                        <HiArrowRight className={ `text-lg group-hover:translate-x-2 transition-all duration-300` } />
                    </motion.div>

                    <div className={ `flex justify-center xl:hidden relative` }>
                        <ProjectsBtn />
                    </div>

                    <motion.div
                        variants={ fadeIn('down', 0.4) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `hidden xl:flex` }
                    >
                        <ProjectsBtn />
                    </motion.div>
                </div>
            </div>

            <div className={ `w-[1200px] h-full absolute right-0 bottom-0` }>
                <div
                    className={ `bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full 
                        absolute mix-blend-color-dodge translate-z-0`
                    }
                />

                <ParticlesContainer />

                <motion.div
                    variants={ fadeIn('up', 0.5) }
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className={ `w-full h-full max-w-[550px] max-h-[491px] absolute -bottom-32 lg:bottom-0 lg:right-[6%]` }
                >
                    <Avatar />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;