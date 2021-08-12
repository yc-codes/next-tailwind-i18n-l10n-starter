import Link from "next/link";
import { FC } from "react";

export interface helpProps {

}

const help: FC<helpProps> = ({

}) => {
  return (
    <div className="bg-dots min-h-screen pt-44">
      <div className="container mx-auto max-w-md flex flex-col space-y-4">
        <h1 className="text-5xl font-semibold">About</h1>
        <p className="">Okay <Link href="/" passHref><a className="hover:text-blue-500 underline" >Go back now</a></Link></p>
        <p className="">Handcrafted by <a target="_blank" className="hover:text-blue-500 underline" href="https://twitter.com/yc_codes">Yash Chauhan</a></p>
      </div>
    </div>
  );
}

export default help;