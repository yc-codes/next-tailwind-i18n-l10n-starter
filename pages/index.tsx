import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="grid bg-dots h-screen w-screen place-items-center">
      <div className="container mx-auto max-w-md">
        <h1 className="text-5xl font-semibold mb-4">Hello World</h1>
        <p className="text-black/[87%] text-">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita earum, ea debitis quas autem ipsa ullam eveniet cum, velit assumenda iure quisquam saepe consectetur nihil laboriosam neque voluptas optio pariatur.</p>
      </div>
    </div>
  )
}

export default Home
