export default interface DbModel<T> {
    metadata: {
        user: string;
        date: Date;
    };
    data: T;
};