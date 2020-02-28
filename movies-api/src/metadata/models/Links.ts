import ILinks from './ILinks';
import ILink from './ILink';

export default class Links implements ILinks {
    private _links: ILink[];

    constructor(links: ILink[]) {
        this._links = links;
    }

    public get links(): ILink[] {
        return this._links;
    }

    public set links(links: ILink[]) {
        this._links = links;
    }
}