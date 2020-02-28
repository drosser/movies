import 'mocha';
import chai from 'chai';
import ILink from '../../../../src/data/models/ILink';
import Link from '../../../../src/data/models/Link';

const expect = chai.expect;

describe("data/models/Link.ts", () => {
    it("Getters and setters", () => {
        const link: ILink = new Link({
            ref: "hello/world"
        });

        expect(link.ref).to.equal("hello/world");
    });
});