let num: number = 10;

let nickname = "tarou"; // 文字列型
let age = 20; // 数値型
let isActive = true; //論理型

let fruits: string[] = ["りんご", "みかん", "パイナップル"];
fruits.forEach((fruit) => fruit.length);

const add = (a: number, b:number): number => {
  return a + b;
}
const outputString = (str: string) => {
  console.log(str);
}

type User = {
  name: string,
  age: number,
  sayHello: () => void;
}

let user: User =
  {
  name: "tarou",
  age: 25,
  sayHello: () => {
    console.log(`こんにちは`);
  },
};

const outputNumOrStr = (val: string | number) => {
  console.log(val);
};

let num1: 10 | 20 = 10;

type Base = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

type Prodct = {
  name: string;
  price: number;
};

let product1: Base & Prodct = {
  id:1,
  name: "テレビ",
  price: 100000,
  createdAt: new Date(),
  updatedAt: new Date(),
};


type Meeting = { 
  startAt: Date
  kind: 'office' | 'tel' | 'web'
  url?: string
}

const meeting1: Meeting = {
  startAt: new Date(),
  kind: 'office',
}

const meeting2: Meeting = {
  startAt: new Date(),
  kind: 'web',
  url: 'https://sample.com',
}

if (meeting2.url !== null && meeting2.url !== undefined) {
  console.log(meeting2.url.length);
}

console.log(meeting1.url?.length);


const element = document.getElementById('email') as HTMLInputElement;
console.log(element?.value);


const remainString = (val: string): string => {
  return val
};

const remainNumber = (val: number): number => {
  return val
}

const remainValue = <T>(val: T): T => {
  return val;
};
remainValue<string>('a');
remainValue<number>(2);


type OneDayMeals = {
  morning: string;
  lunch: string;
  dinner: string;
};

const meal1: OneDayMeals = {
  morning: 'フレンチトースト',
  lunch: '焼きそば',
  dinner: 'とんかつ定食'
}


const outputValueLength = (key: keyof OneDayMeals) => {
  console.log(meal1[key].length);
}