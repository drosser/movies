import ILinks from '../../data/models/ILinks';

export default interface IComment extends ILinks {
    username: string;
    content: string;
    likes: number;
}