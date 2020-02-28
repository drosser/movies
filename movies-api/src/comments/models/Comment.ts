import IComment from "./IComment";
import Links from '../../metadata/models/Links';

export default class Comment extends Links implements IComment {
    private _username: string;
    private _content: string;
    private _likes: number;

    constructor(comment: IComment) {
        super(comment.links);
        this._username = comment.username;
        this._content = comment.content;
        this._likes = comment.likes;
    }

    public get username(): string {
        return this._username;
    }

    public set username(username: string) {
        this._username = username;
    }

    public get content(): string {
        return this._content;
    }

    public set content(content: string) {
        this._content = content;
    }

    public get likes(): number {
        return this._likes;
    }

    public set likes(likes: number) {
        this._likes = likes;
    }
}