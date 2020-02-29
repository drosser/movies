import 'mocha';
import chai from 'chai';


import IMovie from '../../../../src/movies/models/IMovie';
import Movie from '../../../../src/movies/models/Movie';
import ILink from '../../../../src/data/models/ILink';
import Link from '../../../../src/data/models/Link';

const expect = chai.expect;

describe("movies/models/Movie.ts", () => {
    it("Getters and setters", () => {
        const linkOne: ILink = new Link({
            ref: "hello/world"
        });

        const linkTwo: ILink = new Link({
            ref: "hello/world2"
        });

        const links: ILink[] = [linkOne, linkTwo];

        const movie: IMovie = new Movie({
            id: "Hello",
            name: "A Movie", 
            description: "There was a movie", 
            age: "PG",
            links: links
        });

        expect(movie.id).to.equal("Hello");
        expect(movie.name).to.equal("A Movie");
        expect(movie.description).to.equal("There was a movie");
        expect(movie.age).to.equal("PG");
        expect(movie.links).to.equal(links);
    });
});