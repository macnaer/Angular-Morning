
// let userName: string = "Adam";
// console.log(userName);
// //userName = 25; error

// let password: string | number = "test";
// console.log("Pass => ", password);

// let value: any = true;
// console.log(value, typeof value);

// let arr: number[] = [1,345,34543,543,534,543,4565,7,0];
// for (let i:number = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let arrMix: [string, number, boolean] = ["Bill", 23, true];
// console.log(arrMix);

// function Plus(a: number, b: number):number{  // void
//     return a + b;
// }
// console.log(Plus(4, 6));

// type Person = {name: string, age: number, ShowBill():void};

// let User: Person = {
//     name: "Bill",
//     // surname: "Gates",
//     age: 57,
//     ShowBill():void{
//         console.log(`Name: ${this.name} Age: ${this.age}`);
//     }
// }
// User.ShowBill();

interface ILib{
    libraryID: string;
}

abstract class Library implements ILib {
    libraryID: string
    protected libName: string;
    protected address: string;
    protected director: string;
    protected booksCount: number;

    constructor(name: string, address: string, director: string, booksCount: number ){
        this.libName = name;
        this.address = address;
        this.director = director;
        this.booksCount = booksCount;
        this.libraryID = "abracadabra";
    }
    public ShowLibraryInfo():void{
        console.log(`Name: ${this.libName}\nAddress: ${this.address}\nDirector: ${this.director}\nBooks Count: ${this.booksCount}`)
    }
    public SetBookCount(count: number):void{
        this.booksCount = count;
    }
}

class Book extends Library{
    private title: string;
    private author: string;
    private pages: number;

    constructor(name: string, address: string, director: string, booksCount: number, title: string, author: string, pages: number){
        super(name, address, director ,booksCount);
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    ShowBooks():void{
        console.log(`Name: ${this.libName}\nAddress: ${this.address}\nDirector: ${this.director}\nBooks Count: ${this.booksCount}`)
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`);
    }

}

let kobzar = new Book("Rivne Central", "Soborna", "Jeff", 1000, "Kobzar", "Shevchenko", 900);
kobzar.ShowBooks();

// let revneLib = new Library("Revne Central", "Soborna", "Jeff", 10000);
// revneLib.ShowLibraryInfo();
// revneLib.SetBookCount(777777);
// revneLib.ShowLibraryInfo();

