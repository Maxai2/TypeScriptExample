import { Car, count } from './cars';

// import counter = require('./cars');

let car1 = new Car('model 1', 1990);
console.log(car1.getInfo());
count++;
console.log(count);

//-----------------------------------------------------

console.log('hello, world!');

var a;
let b;
const c = 45;

function add(num1: number, num2: number, num3: number = 45):number
{
    return num1 + num2 + num3;
}

let mult = (num1: number, num2: number) => {return num1 * num2; }

console.log(add(1, 5));
console.log(add(1, 5, 12));
console.log(mult(1, 5));
 
interface IUser
{
    id: number;
    name: string;
    age?: number; // not required
    gender?: boolean; // not required

    getInfo(): string;
}
 
class User implements IUser
{
    protected readonly _id: number;
    protected _name: string;
    protected _age: number;

    get id(): number { return this._id; }
    get name(): string { return this._name; }
    set name(n: string) { this._name = n; }
    get age(): number { return this._age; }
    set age(a: number) { this._age = a; }

    constructor(id: number, name: string, age: number)
    {
        this._id = id;
        this._name = name;
        this._age = age;
    }

    getInfo(): string
    {
        //return this._id + ') ' + this._name + ' ' + this.age;
        return `${this._id}) ${this._name} ${this._age}`;
    }
}

class Student extends User
{
    private _group : string;
    public get group() : string { return this._group; }
    public set group(v : string) { this._group = v; }
    
    constructor(id: number, name: string, age: number, group: string)
    {
        super(id, name, age);
        this._group = group;
    }
    
    getInfo(): string
    {
        return `${super.getInfo()}, ${this._group}`;
    }

    study(): string
    {
        return `${this._name} is studing`;
    }
}

let user1 = new User(1, 'Qwerty', 24);
let stud = new Student(1, 'ASDFG', 56, 'FSDM-1711');
//let stud: User = new Student(1, 'ASDFG', 56, 'FSDM-1711');

console.log(user1.getInfo());
console.log(stud.getInfo() + ' ' + stud.study());
//console.log(stud.getInfo() + ' ' + (stud as User).study());
//console.log(stud.getInfo() + ' ' + <User>stud.study());