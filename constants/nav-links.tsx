import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline, MdPersonOutline } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export const navLinks = [
  {
    id: uuidv4(),
    name: 'home',
    url: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: uuidv4(),
    name: 'projects',
    url: '/projects',
    icon: <MdWorkOutline />,
  },
  {
    id: uuidv4(),
    name: 'contact',
    url: '/contact',
    icon: <AiOutlineMessage />,
  },
  {
    id: uuidv4(),
    name: 'about',
    url: '/about',
    icon: <MdPersonOutline />,
  },
];
