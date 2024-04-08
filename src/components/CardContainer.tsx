import React, { useEffect, useState } from 'react'
import { IMovie } from '../utils';
import sorozatok from '../data/sorozatok.json';
import Card from './Card';
import Modal from './Modal';

const MovieList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

    const openModal = (cim:string) => {
        const movie = movies.find(movie => movie.cim === cim);
        if(!movie) {
            return;
        }
        setSelectedMovie(movie);
        setShowModal(true);
    }

    useEffect(() => {
        const fetchMovies = async (): Promise<IMovie[]> => {
            return new Promise<IMovie[]>((resolve) => {
                setTimeout(() => {
                    resolve(sorozatok as IMovie[]);
                }, 10); // API hívás szimulálása
            });
        }
        fetchMovies().then((data:IMovie[]) => {
            setMovies(data);
        });

        return () => {
            setMovies([]);
        }
    }, []);

    return (
        <>
        <div className=" max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {movies.map(( movie:IMovie, i:number ) => (
                <Card key={i} {...movie} openModal={openModal} />
            ))}

        </div>

        {/* Modal */}

        {selectedMovie && <Modal {...selectedMovie} show={showModal} closeModal={() => setShowModal(false)} />}
        
        </>
    )
}

export default MovieList