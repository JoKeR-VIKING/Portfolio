import {
    FaNode
} from 'react-icons/fa'

import {
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiExpress,
    SiFlask,
    SiMongodb,
    SiRedis,
    SiMysql
} from 'react-icons/si';

const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Programming Languages',
                icons: [
                    <SiCplusplus />,
                    <SiJavascript />,
                    <SiTypescript />,
                    <SiPython />
                ]
            },
            {
                title: 'Frontend Development',
                icons: [
                    <SiHtml5 />,
                    <SiCss3 />,
                    <SiReact />,
                    <SiNextdotjs />,
                    <SiRedux />
                ],
            },
            {
                title: 'Backend Development',
                icons: [
                    <FaNode />,
                    <SiExpress />,
                    <SiFlask />,
                    <SiMysql />,
                    <SiMongodb />,
                    <SiRedis />
                ]
            }
        ],
    },
    {
        title: 'achievements',
        info: [
            {
                title: 'ICPC Regionalist',
                stage: '2023'
            },
            {
                title: 'IEEE Xtreme Overflow, National Rank 1',
                stage: '2022',
            },
            {
                title: 'AlgoZenith\'s AlgoConnect, National Rank 5',
                stage: '2022',
            },
            {
                title: 'Code of Duty, Top 2',
                stage: '2020 - 2023'
            },
            {
                title: 'LeetCode Weekly Contest 346, Rank 230',
                stage: 'Out of 11k+ participants'
            },
            {
                title: 'LeetCode, Knight and Top 2%',
                stage: 'Present'
            },
            {
                title: 'GeeksForGeeks, Institute Rank 1',
                stage: 'Present'
            }
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'TCE Intern, Cisco',
                stage: 'Jan 2024 - Jun 2024'
            },
            {
                title: 'SDE Intern (MERN), Patilkaki',
                stage: 'Jan 2023 - Jul 2023'
            },
            {
                title: 'Intern, Sustainable Living Lab',
                stage: 'Feb 2023 - Mar 2023'
            },
            {
                title: 'Project Intern, Winsoft Technologies',
                stage: 'Jun 2022 - Jul 2022'
            },
        ],
    },
    {
        title: 'certifications',
        info: [
            {
                title: 'Cisco Certified Network Associate (CCNA)',
                stage: '2024',
            },
            {
                title: 'Advanced CSS - Udemy',
                stage: '2023',
            },
            {
                title: 'Data Structures and Algorithms (Excellence) - Coding Ninjas',
                stage: '2021',
            },
            {
                title: 'Problem Solving (Intermediate) - Hackerrank',
                stage: '2021',
            }
        ],
    },
];

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

import { Avatar } from '../../components/Avatar';
import { Circles } from '../../components/Circles';

const About = () => {
    const [ index, setIndex ] = useState(0);

    return (
        <div className={ `h-full py-32 text-center xl:text-left mt-14` }>
            <Circles />

            <motion.div
                className={ `hidden xl:flex max-w-[650px] max-h-[591px] absolute bottom-0 -left-[370px]` }
                variants={ fadeIn('right', 0.2) }
                initial='hidden'
                animate='show'
                exit='hidden'
            >
                <Avatar />
            </motion.div>

            <div className={ `container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6` }>
                <div className={ `flex flex-1 flex-col justify-center` }>
                    <motion.h2
                        variants={ fadeIn('right', 0.2) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `h2` }
                    >
                        Crafting <span className={ `text-accent` }>solutions,</span> one line of code at a time.
                    </motion.h2>

                    <motion.p
                        variants={ fadeIn('right', 0.2) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify z-20` }
                    >
                        I am Pratham Vasani, a BE student in Computer Engineering with a strong passion for problem-solving, particularly in DSA and the MERN stack. Currently, I am interning at Cisco as a TCE Intern, and I have previously interned at Patilkaki and Winsoft Technologies. With a keen interest in software development, I aspire to become a Software Development Engineer (SDE).
                    </motion.p>

                    <motion.div
                        variants={ fadeIn('right', 0.6) }
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className={ `hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8` }
                    >
                        <div className={ `flex flex-1 xl:gap-x-6` }>
                            <div className={ `relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-2` }>
                                <div className={ `text-2xl xl:text-4xl font-extrabold text-accent mb-2` }>
                                    <CountUp start={ 0 } end={ 1600 } duration={ 3 } /> +
                                </div>

                                <div className={ `text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]` }>
                                    DSA questions solved
                                </div>
                            </div>

                            <div className={ `relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-2` }>
                                <div className={ `text-2xl xl:text-4xl font-extrabold text-accent mb-2` }>
                                    <CountUp start={ 0 } end={ 2059 } duration={ 3 } />
                                </div>

                                <div className={ `text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]` }>
                                    LeetCode rating
                                </div>
                            </div>

                            <div className={ `relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-2` }>
                                <div className={ `text-2xl xl:text-4xl font-extrabold text-accent mb-2` }>
                                    <CountUp start={ 0 } end={ 1450 } duration={ 3 } />
                                </div>

                                <div className={ `text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]` }>
                                    Codeforces rating
                                </div>
                            </div>

                            <div className={ `relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:-right-2` }>
                                <div className={ `text-2xl xl:text-4xl font-extrabold text-accent mb-2` }>
                                    <CountUp start={ 0 } end={ 1793 } duration={ 3 } />
                                </div>

                                <div className={ `text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]` }>
                                    Codechef rating
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={ fadeIn('left', 0.4) }
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className={ `flex flex-col w-full xl:max-w-[48%] h-[480px]` }
                >
                    <div className={ `flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4` }>
                        { aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={ itemIndex }
                                    className={ `${itemIndex === index && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-100'} 
                                        cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 
                                        after:left-0`
                                    }
                                    onClick={ () => {
                                        setIndex(itemIndex)
                                    }}
                                >
                                    { item.title }
                                </div>
                            );
                        })}
                    </div>

                    <div className={ `py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start` }>
                        { aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={ itemIndex }
                                    className={ `flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60` }
                                >
                                    <div className={ `font-light mb-2 md:mb-0` }>{ item.title }</div>

                                    <div className={ `hidden md:flex` }>-</div>
                                    <div>{ item.stage }</div>

                                    <div className={ `flex gap-x-4` }>
                                        { item.icons?.map((icon, iconIndex) => {
                                            return (
                                                <div key={ iconIndex } className={ `text-2xl text-white` }>
                                                    { icon }
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;