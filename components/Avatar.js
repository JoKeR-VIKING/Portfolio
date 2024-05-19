import Image from 'next/image';

export const Avatar = () => {
    return (
        <div className={ `hidden xl:flex xl:max-w-none` }>
            <Image
                className={ `translate-z-0 w-full h-full select-none` }
                width={ 737 }
                height={ 678 }
                src={ '/avatar1.png' }
                alt=''
            />
        </div>
    );
};