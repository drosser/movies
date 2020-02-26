import 'mocha';
import chai from 'chai';

import IComment from '../../../../src/comments/models/IComment';
import Comment from '../../../../src/comments/models/Comment';
import IMovie from '../../../../src/movies/models/IMovie';
import Movie from '../../../../src/movies/models/Movie';

const expect = chai.expect;

describe("Movie", () => {
    it("Getters and setters", () => {
        const commentOne: IComment = new Comment({
            username: "commentone",
            content: "A comment was here",
            likes: 1
        });

        const commentTwo: IComment = new Comment({
            username: "commenttwo",
            content: "Another comment was here",
            likes: 2
        });

        const comments: IComment[] = [commentOne, commentTwo];

        const movie: IMovie = new Movie({
            name: "A Movie", 
            description: "There was a movie", 
            age: "PG",
            comments: comments
        });

        expect(movie.name).to.equal("A Movie");
        expect(movie.description).to.equal("There was a movie");
        expect(movie.age).to.equal("PG");
        expect(movie.comments).to.equal(comments);
    });
});