'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-between bg-transparent px-[15px]">
      <Image src="https://i.imgur.com/b4FQWrU.png" width={100} height={29} className="w-[100px] h-[29px]" alt="logo" />
      <div className="flex gap-3 bg-white rounded p-3">
        <Image src="https://i.imgur.com/hlCPlCn.png" width={45} height={27} className="w-[45px] h-[27px]" alt="logo" />
        <Image src="https://i.imgur.com/NJv2Ebr.png" width={22} height={26} className="w-[22px] h-[26px]" alt="logo" />
      </div>
    </div>
  );
}
