import 'mocha';
import chai from 'chai';

import config from '../../../src/config/config';

const expect = chai.expect;

describe("config/config.ts", () => {
    it("Reads config", () => {
        expect(config.db).to.not.be.null;
        
        expect(config.db.name).to.be.equal("movies");

        expect(config.db.connection).to.not.be.null;
        expect(config.db.connection.username).to.be.equal("foo");
        expect(config.db.connection.password).to.be.equal("bar");
        expect(config.db.connection.address).to.be.equal("localhost");
        expect(config.db.connection.port).to.be.equal("27017");
    });
});