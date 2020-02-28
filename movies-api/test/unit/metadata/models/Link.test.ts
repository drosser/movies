import 'mocha';
import chai from 'chai';
import ILink from '../../../../src/metadata/models/ILink';
import Link from '../../../../src/metadata/models/Link';

const expect = chai.expect;

describe("metadata/models/Link.ts", () => {
    it("Getters and setters", () => {
        const link: ILink = new Link({
            ref: "hello/world"
        });

        expect(link.ref).to.equal("hello/world");
    });
});