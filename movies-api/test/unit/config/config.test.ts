import 'mocha';
import chai from 'chai';

import config from '../../../src/config/config';

const expect = chai.expect;

describe("config/config.ts", () => {
    it("Reads config", () => {
        expect(config.db).to.not.be.null;
        expect(config.db.username).to.be.equal("foo");
        expect(config.db.password).to.be.equal("bar");
        expect(config.db.address).to.be.equal("localhost");
        expect(config.db.port).to.be.equal("27017");
    });
});