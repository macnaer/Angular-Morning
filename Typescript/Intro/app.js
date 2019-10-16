// let userName: string = "Adam";
// console.log(userName);
// //userName = 25; error
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Library = /** @class */ (function () {
    function Library(name, address, director, booksCount) {
        this.libName = name;
        this.address = address;
        this.director = director;
        this.booksCount = booksCount;
        this.libraryID = "abracadabra";
    }
    Library.prototype.ShowLibraryInfo = function () {
        console.log("Name: " + this.libName + "\nAddress: " + this.address + "\nDirector: " + this.director + "\nBooks Count: " + this.booksCount);
    };
    Library.prototype.SetBookCount = function (count) {
        this.booksCount = count;
    };
    return Library;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(name, address, director, booksCount, title, author, pages) {
        var _this = _super.call(this, name, address, director, booksCount) || this;
        _this.title = title;
        _this.author = author;
        _this.pages = pages;
        return _this;
    }
    Book.prototype.ShowBooks = function () {
        console.log("Name: " + this.libName + "\nAddress: " + this.address + "\nDirector: " + this.director + "\nBooks Count: " + this.booksCount);
        console.log("Title: " + this.title + "\nAuthor: " + this.author + "\nPages: " + this.pages);
    };
    return Book;
}(Library));
var kobzar = new Book("Rivne Central", "Soborna", "Jeff", 1000, "Kobzar", "Shevchenko", 900);
kobzar.ShowBooks();
// let revneLib = new Library("Revne Central", "Soborna", "Jeff", 10000);
// revneLib.ShowLibraryInfo();
// revneLib.SetBookCount(777777);
// revneLib.ShowLibraryInfo();
