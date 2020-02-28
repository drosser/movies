import Metadata from "./Metadata";

export default interface DbModel<T> {
    metadata: Metadata;
    data: T;
};