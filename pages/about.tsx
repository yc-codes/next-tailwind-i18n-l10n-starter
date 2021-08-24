import Link from "next/link";
import React, { FC } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import { fakeArray } from "../helpers/common";

export interface AboutProps {

}

const About: FC<AboutProps> = ({

}) => {
  return (
    <div className="bg-dots min-h-screen pt-44">
      <Header />
      <div className="container mx-auto max-w-3xl flex flex-col space-y-4">
        <Title title="About" />
        <p className="">Okay <Link href="/" passHref><a className="hover:text-blue-500 underline" >Go back now</a></Link></p>
        <p>This is just an about</p>
        {
          fakeArray(6).map(index => {
            return <p key={index} className="text-black/[87%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita earum, ea debitis quas autem ipsa ullam eveniet cum, velit assumenda iure quisquam saepe consectetur nihil laboriosam neque voluptas optio pariatur.</p>
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default About;