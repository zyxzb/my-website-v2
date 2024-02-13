import { AiFillGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';

export const socialLinks = [
  {
    id: uuidv4(),
    name: 'github',
    url: 'https://github.com/zyxzb',
    icon: <AiFillGithub />,
  },
  {
    id: uuidv4(),
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/bartosz-zarzycki/',
    icon: <IoLogoLinkedin />,
  },
];
