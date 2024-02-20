import { socialLinks } from '@/constants/social-links';
import { MdMail } from 'react-icons/md';
import Link from 'next/link';

const NavLinksBottom = () => {
  return (
    <div>
      <ul className='flex flex-col p-6 xSmallHeight:flex-row xSmallHeight:justify-between'>
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center py-4 capitalize hover:text-textDarkBlue hover:transition xSmallHeight:py-0'
              >
                <div className='pr-3 xSmallHeight:pr-1'>{link.icon}</div>
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href='/contact'
            className='flex items-center py-4 capitalize hover:text-textDarkBlue hover:transition xSmallHeight:py-0'
          >
            <div className='pr-3 xSmallHeight:pr-1'>
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
