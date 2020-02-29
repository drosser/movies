import IMovie from "./IMovie";
import Links from "../../data/models/Links";

export default class Movie extends Links implements IMovie {
    private _id:            string;
    private _name:          string;
    private _description:   string;
    private _age:           string;

    constructor(movie: IMovie) {
        super(movie.links);
        this._id            = movie.id;
        this._name          = movie.name;
        this._description   = movie.description;
        this._age           = movie.age;
    }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get age(): string {
        return this._age;
    }

    public set age(age: string) {
        this._age = age;
    }
}