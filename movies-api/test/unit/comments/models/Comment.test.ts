import 'mocha';
import chai from 'chai';

import IComment from '../../../../src/comments/models/IComment';
import Comment from '../../../../src/comments/models/Comment';

const expect = chai.expect;

describe("Comment", () => {
    it("Getters and setters", () => {
        const comment: IComment = new Comment({
            username: "thisisausername",
            content: "A comment was here",
            likes: 73
        });

        expect(comment.username).to.equal("thisisausername");
        expect(comment.content).to.equal("A comment was here");
        expect(comment.likes).to.equal(73);
    });
});