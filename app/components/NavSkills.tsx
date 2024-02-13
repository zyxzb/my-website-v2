import { iconsSkills } from '@/constants/icons-skills';

const NavSkills = () => {
  return (
    <div className='smallHeight:hidden'>
      <ul
        className='text-textLightBlue icons flex flex-wrap gap-3 p-6 text-2xl'
        aria-label='Skills list'
      >
        {iconsSkills.map((icon) => (
          <li
            key={icon.id}
            className='hover:text-textDarkBlue cursor-pointer transition'
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
