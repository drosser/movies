import ILinks from '../../data/models/ILinks';

export default interface IMovie extends ILinks {
    id:             string;
    name:           string;
    description:    string;
    age:            string;
}