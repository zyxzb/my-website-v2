import { socialLinks } from '@/constants/social-links';
import { MdMail } from 'react-icons/md';
import Link from 'next/link';

const NavLinksBottom = () => {
  return (
    <div>
      <ul className='xSmallHeight:flex-row xSmallHeight:justify-between flex flex-col p-6'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-textLightBlue hover:text-textDarkBlue xSmallHeight:py-0 flex items-center py-4 capitalize transition duration-300'
              >
                <div className='xSmallHeight:pr-1 pr-3'>{link.icon}</div>
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href='/contact'
            className='text-textLightBlue hover:text-textDarkBlue xSmallHeight:py-0 flex items-center py-4 capitalize transition duration-300'
          >
            <div className='xSmallHeight:pr-1 pr-3'>
              <MdMail />
            </div>
            Mail
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinksBottom;
