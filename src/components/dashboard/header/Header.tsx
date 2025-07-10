'use client';

import { CircleUser } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[70px] flex items-center justify-between bg-transparent">
      <div className="flex text-xl text-[#414141] font-semibold items-center space-x-4">Money</div>
      <div className="relative">
        <button onClick={toggleNav} className="relative">
          {user.profileImg ? (
            <Image src={user.profileImg} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="avatar" onClick={toggleNav} />
          ) : (
            <CircleUser size={27} className="text-[#414141]" />
          )}
        </button>

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border p-2 rounded-md right-0 flex flex-col justify-center leading-5">
            <p className="text-[14px] px-[15px] whitespace-nowrap font-medium">{user.fullName}</p>
            <p className="text-[14px] text-gray-500 px-[15px] whitespace-nowrap font-medium">{user.cashtag}</p>
            <p className="text-[14px] m-1 mt-4 px-[15px] text-center rounded-md py-[5px] bg-green-500 border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
