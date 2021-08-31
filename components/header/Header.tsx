import Link from "next/link";
import React, { FC, memo } from "react";

export interface HeaderProps {

}

const Header: FC<HeaderProps> = ({

}) => {
  return (
    <div className="w-full fixed h-16 bg-white/60 top-0 left-0 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link href="/" passHref>
          <a>
            <h5 className="font-semibold">Next.js Base</h5>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default memo(Header);