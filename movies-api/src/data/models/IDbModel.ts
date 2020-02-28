import IMetadata from "./IMetadata";

export default interface IDbModel<T> {
    metadata: IMetadata;
    data: T;
};