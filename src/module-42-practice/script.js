const arr = [1, 2, 3, 4, 5];
arr.push(2);
arr.pop();
console.log(arr.includes(3));
console.log(arr.indexOf(2));

/*
    Step:2
*/

const user = {
    id: 12233,
    name: 'John',
    skills: ['Javascript', 'React', 'NodeJS'],
    projects: {
        vanillaJs: ['to-do-app', 'calculator', 'e-commerce'],
        react: ['Mango sell', 'lorem-ipsum'],
        vueJs: ['to-do-app', 'others'],
    },
    age: 29,
    salary: 50000,
};

const varAge = 'age';
console.log(user.skills.map((a) => `${a}ola`));
console.log(user[varAge]);

const addSixtyFive = (num) => num + 65;
const isEven = (num) => num % 2 === 0;
console.log(isEven(12));
console.log(addSixtyFive(12));

const newNum = [...arr];
const newNum2 = arr;
console.log(newNum);
console.log(newNum2);

const products = [
    {
        name: 'laptop',
        price: 32999,
        brand: 'lenovo',
        color: 'silver',
    },
    {
        name: 'phone',
        price: 21000,
        brand: 'samsung',
        color: 'black',
    },
    {
        name: 'watch',
        price: 4500,
        brand: 'Apple',
        color: 'white',
    },
    {
        name: 'camera',
        price: 56000,
        brand: 'Canon',
        color: 'black',
    },
];

const names = products.map((product) => product.name);
console.log(names);

const prices = products.map((product) => product.price);
console.log(prices);

const brands = products.map((product) => product.brand);
console.log(brands);
const priceHigherThanTwentyThousand = products.filter((product) => product.price > 20000);
console.log(...priceHigherThanTwentyThousand);

products.forEach((product) => console.log(product.price));
products.forEach((product) => console.log(product.price));
