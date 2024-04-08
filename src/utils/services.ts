import { IMovie } from '.';
import sorozatok from '../data/sorozatok.json';

export async function fetchSeries(): Promise<IMovie[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sorozatok);
    }, 1000);
  });
}