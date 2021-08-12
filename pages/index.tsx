import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-dots min-h-screen pt-44">
      <div className="container mx-auto max-w-md flex flex-col space-y-4">
        <h1 className="text-5xl font-semibold ">Hello World</h1>
        <p className="">Read More <Link href="/about" passHref><a className="hover:text-blue-500 underline" >About what is this?</a></Link></p>
        <p className="text-black/[87%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita earum, ea debitis quas autem ipsa ullam eveniet cum, velit assumenda iure quisquam saepe consectetur nihil laboriosam neque voluptas optio pariatur.</p>
        <p className="">Handcrafted with <span className="text-red-500">&#9829;</span> by <a target="_blank" className="hover:text-blue-500 underline" href="https://twitter.com/yc_codes">Yash Chauhan</a></p>
      </div>
    </div>
  )
}

export default Home
