import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai';
import { MdWorkOutline, MdPersonOutline } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';

export const navLinks = [
  {
    id: uuidv4(),
    nameKey: 'home', // key for translation
    url: '/',
    icon: <AiOutlineHome />,
  },
  {
    id: uuidv4(),
    nameKey: 'projects',
    url: '/projects',
    icon: <MdWorkOutline />,
  },
  {
    id: uuidv4(),
    nameKey: 'contact',
    url: '/contact',
    icon: <AiOutlineMessage />,
  },
  {
    id: uuidv4(),
    nameKey: 'about',
    url: '/about',
    icon: <MdPersonOutline />,
  },
];
