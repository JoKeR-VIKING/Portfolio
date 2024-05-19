import Image from 'next/image';

export const TopLeftImg = () => {
    return (
        <div className={ `absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50` }>
            <Image
                width={ 400 }
                height={ 500 }
                src='/top-left-img.png'
                alt=''
            />
        </div>
    );
};