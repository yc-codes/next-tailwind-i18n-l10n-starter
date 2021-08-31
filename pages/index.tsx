import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Title from '../components/title/Title'
import { fakeArray } from '../helpers/common'

const Home: NextPage = () => {

  const [active, setActive] = useState(false)

  return (
    <div className="bg-dots min-h-screen pt-44">
      <Header />
      <div className="container mx-auto max-w-3xl flex flex-col space-y-4">
        <Title title="Hello World3" />
        <button
          onClick={() => {
            setActive(!active)
          }}
        >
          {active ? 'Active' : 'In Avtive'}
        </button>
        <p className="">Read More <Link href="/about" passHref><a className="hover:text-blue-500 underline" >About what is this?</a></Link></p>
        {
          fakeArray(8).map(index => {
            return <p key={index} className="text-black/[87%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita earum, ea debitis quas autem ipsa ullam eveniet cum, velit assumenda iure quisquam saepe consectetur nihil laboriosam neque voluptas optio pariatur.</p>
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home
