import Link from 'next/link';

const HomeTextSection = () => {
  return (
    <section>
      <p className='my-8 sm:text-lg'>
        I have experience in telecommunications and e-commerce, but I realized
        that I am more interested in writing code. In addition to coding, I
        enjoy photography, keeping up with new technologies, biking, and
        listening to electronic music. If you&apos;re looking for a reliable and
        enthusiastic Frontend/React developer to work with, let&apos;s team up
        and create something amazing.
      </p>
      <p className='mb-10 mt-14 sm:text-lg'>
        Check out some of my recent projects
      </p>
      <Link
        href='/projects'
        className='bg-textDarkBlue hover:bg-textLightBlue hover:text-bgDarkBlue mb-14 p-4 transition'
      >
        My Projects
      </Link>
      <div>
        <p className='mb-10 mt-14 sm:text-lg'>Leave me a message</p>
        <Link
          href='/contact'
          className='bg-textDarkBlue hover:bg-textLightBlue hover:text-bgDarkBlue p-4 transition'
        >
          Contact
        </Link>
      </div>
    </section>
  );
};

export default HomeTextSection;