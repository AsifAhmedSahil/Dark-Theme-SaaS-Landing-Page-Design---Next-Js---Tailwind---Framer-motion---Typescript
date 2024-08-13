import Image from 'next/image';
import logoImage from '../assets/images/logosaas.png'
import MenuIcon from '../assets/icons/menu.svg'

export const Navbar = () => {
  return (
    <div className="container bg-black">
      <div className='py-4  flex items-center justify-between'>
        <div className='relative'>
          <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FBDD9B,#C2F0B1,#2FD8FE)] blur-md'></div>
          <Image src={logoImage} alt='saas image' className='h-12 w-12 relative'/>
        </div>
        <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-sm'>
        <MenuIcon className="text-white"/>
        </div>
        
      </div>

    </div>
  );
};
