import 'mocha';
import chai from 'chai';

import IComment from '../../../../src/comments/models/IComment';
import Comment from '../../../../src/comments/models/Comment';

import ILink from '../../../../src/data/models/ILink';
import Link from '../../../../src/data/models/Link';

const expect = chai.expect;

describe("Comment", () => {
    it("Getters and setters", () => {

        const linkOne: ILink = new Link({
            ref: "hello/world"
        });

        const linkTwo: ILink = new Link({
            ref: "hello/world2"
        });

        const links: ILink[] = [linkOne, linkTwo];

        const comment: IComment = new Comment({
            username: "thisisausername",
            content: "A comment was here",
            likes: 73,
            links: links
        });

        expect(comment.username).to.equal("thisisausername");
        expect(comment.content).to.equal("A comment was here");
        expect(comment.likes).to.equal(73);
        expect(comment.links).to.equal(links);
    });
});