import 'mocha';
import chai from 'chai';

import IMovie from '../../../../src/movies/models/IMovie';
import Movie from '../../../../src/movies/models/Movie';

const expect = chai.expect;

describe("Movie", () => {
    it("Getters and setters", () => {
        const movie: IMovie = new Movie({
            name: "A Movie", 
            description: "There was a movie", 
            age: "PG"
        });

        expect(movie.name).to.equal("A Movie");
        expect(movie.description).to.equal("There was a movie");
        expect(movie.age).to.equal("PG");
    });
});