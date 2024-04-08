import React from 'react'
import { IMovie } from '../utils'

const MovieCard:React.FC<IMovie & { openModal: (cim:string) => void}> = ({ cim, kep, leiras, imdb, evadok, openModal}) => {
  return (
    <div className="card bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg duration-200 ease-in-out" onClick={() => openModal(cim)}> {/* A cím fogja egyértelműen azonosítani a sorozatot */}
      <img src={kep} alt={cim} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-amber-800 mb-2">{cim}</h2>
        <p className="text-amber-700 line-clamp-2">{leiras}</p>
      </div>
    </div>
  )
}

export default MovieCard