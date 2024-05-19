import Image from 'next/image';
import Link from 'next/link';

import { Socials } from './Socials';

export const Header = () => {
    return (
        <header
            className={ `absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]` }
        >
            <div className={ `container mx-auto` }>
                <div className={ `flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8` }>
                    <Link href={ `/` }>
                        <Image
                            width={ 440 }
                            height={ 68 }
                            src='/logo.svg'
                            alt=''
                            priority={ true }
                        />
                    </Link>

                    <Socials />
                </div>
            </div>
        </header>
    );
};