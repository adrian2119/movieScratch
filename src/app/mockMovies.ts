import { Movie } from './movie';

export const MOVIES: Movie[] = [
    {
        title: 'Captain',
        parentalRating: '12A',
        genres: ['Action', 'Drama'],
        directors: ['John Cusack'],
        producers: ['John Williams', 'John Cusack'],
        actors: ['Chris Evans', 'Scarlett Johansen']
    },
    {
        title: 'General',
        parentalRating: 'M',
        genres: ['Horror', 'Crime'],
        directors: ['Steven Spielberg','Numan Ass'],
        producers: ['Steven Spielberg', 'Johny'],
        actors: ['Someone famous', 'Somebody Else', 'A Dickhead']
    },
    {
        title: 'Crap',
        parentalRating: '18',
        genres: ['rubbish'],
        directors: ['Joe Head'],
        producers: ['Jack Balls'],
        actors: ['Someone famous']
    }
]