import React from 'react'

export default function NotFound({notfound}) {
  return (
    <div className="w-full h-full pt-16">
     
      <div className="w-full h-full">
        <img className="w-full h-full opacity-60" src={notfound} alt="notfound" />
      </div>
      <h1 className="fixed text-4xl text-white font-extrabold top-0 left-0 right-0 bottom-0 h-screen flex items-center justify-center">
        Não foi possível encontrar o pokemon
      </h1>
    </div>
  )
}
