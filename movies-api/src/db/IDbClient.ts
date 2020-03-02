import { MongoClient } from "mongodb";

export default interface IDbClient {
    get(): MongoClient;
    connect(): void;
}