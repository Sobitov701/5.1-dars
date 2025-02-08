//1-misol
//Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.

const people = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

function getAverageAge(arr) {
  const totalAge = arr.reduce((sum, person) => {
    sum + person.age;
  }, 0);
  return totalAge / arr.length;
}

console.log(getAverageAge(people));

//2-misol
//Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.

const people2 = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
].map((person) => {
  return { name: person.name, age: person.age, isMerried: person.age > 25 };
});

console.log(people2);

//3-misol
//Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)

const people3 = [
  { name: "Abdulaziz", age: 33 },
  { name: "Erkin", age: 22 },
  { name: "Temur", age: 34 },
  { name: "Sardor", age: 20 },
];

function getNameMaxMinAge(arr) {
  let maxAgePerson = arr[0];
  let minAgePerson = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxAgePerson.age) {
      maxAgePerson == arr[i];
    }
    if (arr[i] < minAgePerson.age) {
      minAgePerson = arr[i];
    }
  }
  return {
    maxAgename: maxAgePerson.name,
    minAgename: minAgePerson.name,
  };
}

console.log(getNameMaxMinAge(people3));

//4-misol
//Objectda turli xil kalitlar bir xil qiymatlarga ega, kalitlari o'sha qiymatlardan iborat shunday object tuzingki, bu objectning qiymatlari massiv ko'rinishidagi eski objectning kalitlarlaridan iborat bo'lsin.

const input = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };

function Ob(obj) {
  const result = {};

  for (const key in obj) {
    const value = obj[key];

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(Number(key));
  }

  return result;
}

console.log(Ob(input));

//5-misol
//Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.

obj1 = { a: 3, b: 10, c: 5, d: 7 };
obj2 = { a: 10, d: 4, e: 6, f: 15 };

//6-misol
//Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)

const me = {
  firstName: "Abdulaziz",
  lastName: "Toshpulatov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
};

Object.keys(me).forEach((key) => {
  console.log(`${key}:`, me[key]);
});

//7-misol
//Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

function squared(n) {
  const result = {};

  for (let i = 1; i <= n; i++) {
    result[i] = i * i;
  }

  return result;
}

console.log(squared(5));

//8-misol
//2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping.

const obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

function sumKeysAndValues(obj) {
  const keysSum = Object.keys(obj).reduce((sum, key) => {
    sum + Number(key);
  }, 0);
  const valuesSum = Object.values(obj).reduce((sum, value) => {
    sum + value;
  }, 0);

  return keysSum + valuesSum;
}

console.log(sumKeysAndValues(obj));

//9-misol
//Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

const name = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

//10-misol
//Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

const products = {
  Apelsin: 10000,
  Olma: 12000,
  Mandarin: 8000,
  Banan: 20000,
};

Object.values(products).reduce((sum, price) => {
  sum + price;
}, 0);

console.log(products);
