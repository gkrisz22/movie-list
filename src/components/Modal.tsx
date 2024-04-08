import React from 'react'
import { IMovie } from '../utils'

const Modal:React.FC<IMovie & { show:boolean, closeModal: () => void }> = ({kep, cim, leiras, imdb, evadok, closeModal, show = false}) => {
  return (
    <div id="modal" className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${!show && 'invisible'}`}>
    <div className="bg-white p-6 rounded-lg max-w-md">
      <h2 className="text-xl font-semibold mb-2" id="modalTitle">{cim}</h2>
      <img src={kep} alt="Netflix Sorozat" className="w-full h-40 object-cover mb-4" />
      <p id="modalContent" className="text-amber-700">{leiras}</p>
      <p id="imdbRating" className="text-amber-700">IMDb értékelés: {imdb}</p>
      <p id="seasons" className="text-amber-700">Évadok száma: {evadok}</p>
      <button id="closeModal" className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-600" onClick={closeModal}>Bezárás</button>
    </div>
  </div>
  )
}

export default Modal