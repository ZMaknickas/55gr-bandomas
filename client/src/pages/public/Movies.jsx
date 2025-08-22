import { PublicPageTitle } from '../../components/PublicPageTitle';
import { MovieCard } from '../../components/MovieCard';
import { MoviesFilter } from '../../components/MoviesFilter';
import { useContext } from 'react';
import { MoviesContext } from '../../context/movies/MoviesContext';

export function MoviesPage() {
    const { publicMovies } = useContext(MoviesContext);

    return (
        <main className='min-page-height'>
            <PublicPageTitle title='List of Clients' />
        </main>
    );
}