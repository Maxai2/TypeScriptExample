export var count:number = 0;

export class Car
{
    private _model : string;
    public get model() : string { return this._model; }
    public set model(v : string) { this._model = v; }
    
    private _year : number;
    public get year() : number { return this._year; }
    public set year(v : number) { this._year = v; }
    
    constructor (model: string, year: number)
    {
        this._model = model;
        this._year = year;
    }

    public getInfo(): string
    {
        return `${this._model} ${this._year}`;
    }
}