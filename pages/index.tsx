import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [selected, setSelected] = useState(1)
  return (
    <div className='flex h-screen w-screen'>
      <div className='flex flex-col bg-stone-900 h-screen ' >
        <div className='flex mx-2.5 my-2 pr-8 '>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" stroke="#2f2f2f" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <h1 className='text-2xl'>BLITZ</h1>
        </div>
        <button className='flex mx-4 my-2 pr-8' onClick={()=>{setSelected(1)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5 " viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className={`mx-4 text-${selected === 1 ? 'red' : 'gray-400' } hover:text-white`}>Início</span>
        </button>
        
        <button className='flex mx-4 my-2 pr-8' onClick={()=>{setSelected(2)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <span className={`mx-4 text-${selected === 2 ? 'white' : 'gray-400' } hover:text-white`}>Estatísticas</span>
        </button>

        <button className='flex mx-4 my-2 pr-8' onClick={()=>{setSelected(3)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className={`mx-4 text-${selected === 3 ? 'white' : 'gray-400' } hover:text-white `}>Pro Builds</span>
        </button>

        <button className='flex mx-4 my-2 pr-8 mt-auto' onClick={()=>{setSelected(4)}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span className={`mx-4 text-${selected === 4 ? 'white' : 'gray-400' } hover:text-white`}>Configurações</span>
        </button>

        <div className="bg-slate-800">
          <div className='flex mx-3.5 my-2 pr-8 '>
            <img className="w-6 h-6 justify-center rounded-full mt-3" src="/avatar.png" alt="Rounded avatar"/>
            <div className={'flex flex-col mx-3.5'} >
              <span>Meguinha</span>
              <span>Sem conexão</span>
            </div>
          </div>
        </div>


      </div>
      <div className='flex bg-stone-700 w-full'>
        <h1>Meguinha</h1>
        <span>Level: 16</span>
      </div>
    </div>
  )
}

export default Home
