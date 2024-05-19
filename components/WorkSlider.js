const projectSlides = {
    slides: [
        {
            images: [
                {
                    title: 'Sociaza',
                    path: '/sociaza.png',
                    link: 'https://sociaza.netlify.app/'
                },
                {
                    title: 'AutoQA',
                    path: '/autoqa.png',
                    link: 'https://github.com/CryptCoders/autoQA_backend/'
                },
                {
                    title: 'Natours',
                    path: '/natours.png',
                    link: 'https://joker-viking.github.io/Natours/'
                },
                {
                    title: 'Nexter',
                    path: '/nexter.png',
                    link: 'https://joker-viking.github.io/Nexter/'
                }
            ],
        },
        {
            images: [
                {
                    title: 'Trillo',
                    path: '/trillo.png',
                    link: 'https://joker-viking.github.io/Trillo/'
                }
            ]
        }
    ]
};

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Image from 'next/image';
import {
    BsArrowRight
} from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export const WorkSlider = () => {
    return (
        <Swiper
            className={ `h-[280px] sm:h-[480px]` }
            spaceBetween={ 10 }
            pagination={{
                clickable: true
            }}
            freeMode={ true }
            modules={[ Pagination ]}
        >
            { projectSlides.slides.map((project, index) => {
                return (
                    <SwiperSlide key={ index }>
                        <div className={ `grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer` }>
                            { project.images.map((image, index) => {
                                return (
                                    <div
                                        key={ index }
                                        className={ `relative rounded-lg overflow-hidden flex items-center justify-center group` }
                                        onClick={ () => {
                                            window.open(image.link, '_blank');
                                        }}
                                    >
                                        <div className={ `flex items-center justify-center relative overflow-hidden group` }>
                                            <Image
                                                width={ 500 }
                                                height={ 300 }
                                                src={ image.path }
                                                alt=''
                                            />

                                            <div
                                                className={ `absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                                                    opacity-0 group-hover:opacity-80 transition-all duration-700`
                                                }
                                            />

                                            <div
                                                className={ `absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                                                    transition-all duration-300`
                                                }
                                            >
                                                <div className={ `flex flex-col items-center gap-y-2 text-[13px] tracking-[0.2em]` }>
                                                    <div className={ `delay-100 uppercase` }>
                                                        { image.title }
                                                    </div>

                                                    <div className={ `flex items-center gap-x-2` }>
                                                        { !image.link.includes('github.com') ? (
                                                            <>
                                                                <div className={ `delay-100` }>
                                                                    LIVE
                                                                </div>

                                                                <div className={ `translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150` }>
                                                                    DEMO
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className={ `delay-100` }>
                                                                    GITHUB
                                                                </div>

                                                                <div className={ `translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150` }>
                                                                    REPO
                                                                </div>
                                                            </>
                                                        )}

                                                        <div
                                                            className={ `text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300
                                                                delay-200 `
                                                            }
                                                        >
                                                            <BsArrowRight />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};