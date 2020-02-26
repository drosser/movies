import IComment from '../../comments/models/IComment';

export default interface IMovie {
    name: string;
    description: string;
    age: string;
    comments: IComment[];
}