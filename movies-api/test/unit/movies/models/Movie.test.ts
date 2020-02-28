import 'mocha';
import chai from 'chai';


import IMovie from '../../../../src/movies/models/IMovie';
import Movie from '../../../../src/movies/models/Movie';
import ILink from '../../../../src/metadata/models/ILink';
import Link from '../../../../src/metadata/models/Link';

const expect = chai.expect;

describe("Movie", () => {
    it("Getters and setters", () => {
        const linkone: ILink = new Link({
            ref: "hello/world"
        });

        const linktwo: ILink = new Link({
            ref: "hello/world2"
        });

        const links: ILink[] = [linkone, linktwo];

        const movie: IMovie = new Movie({
            name: "A Movie", 
            description: "There was a movie", 
            age: "PG",
            links: links
        });

        expect(movie.name).to.equal("A Movie");
        expect(movie.description).to.equal("There was a movie");
        expect(movie.age).to.equal("PG");
        expect(movie.links).to.equal(links);
    });
});