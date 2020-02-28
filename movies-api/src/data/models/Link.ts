import ILink from "./ILink";

export default class Link implements ILink {
    private _ref: string;

    constructor(link: ILink) {
        this._ref = link.ref;
    }

    public get ref(): string {
        return this._ref;
    }

    public set ref(ref: string) {
        this._ref = ref;
    }
}