import Link from 'next/link';
import { SiLinkedin, SiGithub, SiLeetcode, SiCodeforces, SiCodechef, SiNpm, SiGeeksforgeeks } from 'react-icons/si';

export const Socials = () => {
    return (
        <div className={ `flex items-center gap-x-5 text-lg` }>
            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://www.linkedin.com/in/pratham-vasani-a07263202/'
            >
                <SiLinkedin />
            </Link>

            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://github.com/JoKeR-VIKING'
            >
                <SiGithub />
            </Link>

            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://leetcode.com/JoKeR_VIKING'
            >
                <SiLeetcode />
            </Link>

            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://codeforces.com/profile/prathamvasani1'
            >
                <SiCodeforces />
            </Link>

            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://codechef.com/users/pratham_joker'
            >
                <SiCodechef />
            </Link>

            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://www.npmjs.com/~prathamvasani1'
            >
                <SiNpm />
            </Link>

            <Link
                className={ `hover:text-accent transition-all duration-300` }
                href='https://www.geeksforgeeks.org/user/prathamvasani1/'
            >
                <SiGeeksforgeeks />
            </Link>
        </div>
    );
};