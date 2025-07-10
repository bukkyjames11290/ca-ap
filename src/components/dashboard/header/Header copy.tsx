'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[70px] flex items-center justify-between bg-transparent">
      <div className="flex text-xl text-[#414141] font-semibold items-center space-x-4">Money</div>
      <div className="relative">
        {user.profileImg ? (
          <Image src={user.profileImg} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="logo" onClick={toggleNav} />
        ) : (
          <RiLogoutCircleLine className="text-2xl text-[#414141]" onClick={toggleNav} />
        )}
        
        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#196B69]">{user.fullName}</p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#196B69] border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
