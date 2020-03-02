import DbOptions from "./DbOptions";
import { MongoClient } from "mongodb";

export default class DbClient {
    private _client: MongoClient;

    constructor(options: DbOptions) {
        let url = "mongodb://";

        if (options.username && options.password) {
            url += options.username + ":" + 
            options.password + "@" + options.address + ":" + options.port;
        } else {
            url += options.address + ":" + options.port;
        }

        this._client = new MongoClient(url, {
            useNewUrlParser: true
        });
    }

    public get(): MongoClient {
        return this._client;
    }

    public async connect(): Promise<void> {
        await this._client.connect();
    } 
}