import Image from 'next/image';

export const Bulb = () => {
    return (
        <div className={ `absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]` }>
            <Image
                className={ `w-full h-full` }
                width={ 260 }
                height={ 200 }
                src={ '/bulb.png' }
                alt=''
            />
        </div>
    );
};