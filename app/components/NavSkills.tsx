import { iconsSkills } from '@/constants/icons-skills';

const NavSkills = () => {
  return (
    <div className='smallHeight:hidden'>
      <ul
        className='icons flex flex-wrap gap-3 p-6 text-2xl'
        aria-label='Skills list'
      >
        {iconsSkills.map((icon) => (
          <li
            key={icon.id}
            className='hover:text-lightBlue cursor-pointer hover:transition'
            title={icon.title}
          >
            {icon.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavSkills;
