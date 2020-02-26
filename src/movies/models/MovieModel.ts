import IMovieModel from "./IMovieModel";

export default class MovieModel implements IMovieModel {
    private _name:          string;
    private _description:   string;
    private _age:           string;

    constructor(name: string, description: string, age: string) {
        this._name          = name;
        this._description   = description;
        this._age           = age;
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