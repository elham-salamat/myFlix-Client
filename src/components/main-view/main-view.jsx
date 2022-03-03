import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                {
                    _id: 1,
                    Title: 'Inception',
                    Description: 'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another persons idea into a targets subconscious. The ensemble cast includes Ken Watanabe, Joseph Gordon- Levitt, Marion Cotillard, Elliot Page, [a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.',
                    ReleasedYear: 2010,
                    Country: 'United States',
                    Genre: {
                        Name: 'action',
                        Description: 'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.'
                    },
                    Directors: {
                        Name: 'Christopher Nolan',
                        Bio: 'Christopher Edward Nolan is a British-American film director, producer, and screenwriter. His films have grossed more than US$5 billion worldwide, and have garnered 11 Academy Awards from 36 nominations.',
                        BirthYear: 1970
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg?20170322172828',
                    Featured: true,
                    Rating: 4.3
                },
                {
                    _id: 2,
                    Title: 'The shawshank Redemption',
                    Description: 'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption.',
                    ReleasedYear: 1994,
                    Country: 'United States',
                    Genre: {
                        Name: 'drama',
                        Description: 'Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
                    },
                    Directors: {
                        Name: 'Frank Darabont',
                        Bio: 'Frank Árpád Darabont (born Ferenc Árpád Darabont, January 28, 1959) is an American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe Award. In his early career, he was primarily a screenwriter for horror films such as A Nightmare on Elm Street 3: Dream Warriors (1987), The Blob (1988) and The Fly II (1989). As a director, he is known for his film adaptations of Stephen King novellas and novels such as The Shawshank Redemption (1994), The Green Mile (1999) and The Mist (2007).',
                        BirthYear: 1959
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg?20200628124114',
                    Featured: false,
                    Rating: 4.8
                },
                {
                    _id: 3,
                    Title: 'Gladiator',
                    Description: 'Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. The film was co-produced and released by DreamWorks Pictures and Universal Pictures. ',
                    ReleasedYear: 2000,
                    Country: 'United Kingdom',
                    Genre: {
                        Name: 'drama',
                        Description: 'Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone.'
                    },
                    Directors: {
                        Name: 'Ridley Scott',
                        Bio: 'Sir Ridley Scott (born 30 November 1937) is an English film director and producer. He has directed, among others, the science fiction films Alien (1979), Blade Runner (1982) and The Martian (2015), the road crime film Thelma & Louise (1991), the historical drama film Gladiator (2000), and the war film Black Hawk Down (2001).',
                        BirthYear: 1937
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/220px-Gladiator_%282000_film_poster%29.png',
                    Featured: true,
                    Rating: 5
                }
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movieData={selectedMovie} onBackClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }
}