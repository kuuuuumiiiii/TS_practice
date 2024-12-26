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


// 演習問題
// 文字列が要素の配列の型宣言と、その型の配列を作成しましょう。
let stringArray1: string[] = ['Hello', 'World'];


// nicknameが文字列型、fullNameが文字列型のオプショナルプロパティ、
// ageが数値型、genderがmaleかfemaleのどちらか、
// sayHelloがコンソールに「こんにちは」と出力するメソッドを持つオブジェクトの型を型エイリアスとして定義し、
// そのオブジェクトを作成しましょう。また、作成したオブジェクトのfullNameの文字列の長さをコンソールに出力しましょう。

type Gender = 'male' | 'female';

type Person = {
    nickname: string;
    fullName?: string;  
    age: number;
    gender: Gender;
    sayHello: () => void;
};


const person: Person = {
    nickname: "Taro",
    fullName: "山田 太郎",
    age: 25,
    gender: "male",
    sayHello: () => {
        console.log("こんにちは");
    }
};


person.sayHello();

// fullNameの文字列長を出力（オプショナルプロパティなのでnullチェックが必要）
if (person.fullName) {
    console.log(`フルネームの長さ: ${person.fullName.length}`);
} else {
    console.log("フルネームは設定されていません");
}


// Base型の定義
type Basee = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

// Product型の定義
type Product = {
  name: string;
};

// 型の結合（2つの方法を示します）
// 方法1: 交差型を使用して新しい型を定義
type ProductWithId = Basee & Product;

// 方法2: 直接オブジェクトの型注釈として使用
const product: Basee & Product = {
  id: 1,
  name: "サンプル商品",
  createdAt: new Date(),
  updatedAt: new Date()
};

// 方法1で定義した型を使用する場合
const anotherProduct: ProductWithId = {
  id: 2,
  name: "別の商品",
  createdAt: new Date(),
  updatedAt: new Date()
};

// 動作確認
console.log(product);      // { id: 1, name: "サンプル商品" }
console.log(anotherProduct); // { id: 2, name: "別の商品" }