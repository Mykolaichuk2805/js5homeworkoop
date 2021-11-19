//  1.1 класс Worker
/*
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  get getSalary() {
    return this.rate * this.days;
  }
}

let work1 = new Worker(1, 7, "30", "5");
let work2 = new Worker(1, 7, "50", "7");
let sumSalary = work1.getSalary + work2.getSalary;
console.log(work1.getSalary);
console.log(work2.getSalary);
console.log(sumSalary);
*/

// 1.2 класс  MyString
/*
class MyString {
  constructor(str) {
    this.str = str;
  }
  get reverse() {
    return this.str.split("").reverse().join("");
  }

  get ucFirst() {
    if (!this.str) return this.str;

    return this.str[0].toUpperCase() + this.str.slice(1);
  }

  get ucWords() {
    return (this.str + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    }); // знайшов лише для латинки
  }
}

let str1 = new MyString("stroka dlya zmin");
console.log(str1.reverse);
console.log(str1.ucFirst);
console.log(str1.ucWords);
*/

// 1.3 класс Validator
/*
class Validator {
  constructor(str) {
    this.str = str;
  }

  get isEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.str).toLowerCase());
  }

  get isDomain() {
    return /^https?:\/\/[^\/?]+\/$/g.test(this.str);
  }

  get isDate() {
    var re = /^\d{2}\.\d{2}\.\d{4}$/i;
    return re.test(this.str);
  }

  get isPhone() {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(this.str);
  }
}

let str2 = new Validator("dmytro.ilnytskyi@nure.ua");
let str3 = new Validator("abrakazjabra");
let str4 = new Validator("https://google.com/");
let str5 = new Validator("abrakazjabra");
let str6 = new Validator("01.02.2021");
let str7 = new Validator("abrakazjabra");
let str8 = new Validator("89000000000");
let str9 = new Validator("abrakazjabra");
console.log(str2.isEmail);
console.log(str3.isEmail);
console.log(str4.isDomain);
console.log(str5.isDomain);
console.log(str6.isDate);
console.log(str7.isDate);
console.log(str8.isPhone);
console.log(str9.isPhone);
*/
