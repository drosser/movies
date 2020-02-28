import ILinks from '../../metadata/models/ILinks';

export default interface IMovie extends ILinks {
    name: string;
    description: string;
    age: string;
}