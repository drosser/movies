import DbClient from './DbClient';
import DbOptions from './DbOptions';
import config from '../config';

const options: DbOptions = config.db.connection;

const dbClient = new DbClient(options);

export {dbClient as client};