import ILinks from '../../data/models/ILinks';

export default interface IComment extends ILinks {
    id:         string;
    username:   string;
    content:    string;
    likes:      number;
}