import React from 'react';
import { useRouter } from 'next/router';
import { Bars3Icon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-polkadot/60 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 justify-between">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className='flex w-full items-center justify-center space-x-4'>
        <span className='text-4xl text-white font-bold font-unbounded'>PolkaBot</span>
        <Image src='/polkabot.gif' className="items-center" height={48} width={48} alt='logo' />
      </div>

      {/* <div className="flex-shrink-0" onClick={() => router.push('/settings')}>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <Cog6ToothIcon
            className="-ml-0.5 h-4 w-4 sm:w-5 sm:h-5"
            aria-hidden="true"
          />
          <span>Settings</span>
        </button>
      </div> */}
    </div>
  );
};

export default Header;
