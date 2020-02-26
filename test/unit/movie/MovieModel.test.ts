import chai from 'chai';

import IMovieModel from '../../../src/movies/models/IMovieModel';
import MovieModel from '../../../src/movies/models/MovieModel';

const expect = chai.expect;

describe("MovieModel", () => {
    it("Getters and setters", () => {
        const movieModel: IMovieModel = new MovieModel("A Movie", "There was a movie", "PG");

        expect(movieModel.name).to.equal("A Movie");
        expect(movieModel.description).to.equal("There was a movie");
        expect(movieModel.age).to.equal("PG");
    });
});