import 'mocha';
import chai from 'chai';

import ILink from '../../../../src/data/models/ILink';
import Link from '../../../../src/data/models/Link';

import ILinks from '../../../../src/data/models/ILinks';
import Links from '../../../../src/data/models/Links';

const expect = chai.expect;

describe("metadata/models/Links.ts", () => {
    it("Getters and setters", () => {

        const linkOne: ILink = new Link({
            ref: "hello/world"
        });

        const linkTwo: ILink = new Link({
            ref: "hello/world2"
        });

        const linksList: ILink[] = [linkOne, linkTwo];

        const links: ILinks = new Links(linksList);

        expect(links.links).to.be.equal(linksList);
    });
});