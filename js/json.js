const user = { id: 1, name: 'kosdijfosj', job: 'Web development'}
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop ={
    owner: 'Alia',
    addreddss: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

const stringShop = JSON.stringify(shop);
console.log(typeof stringShop);
const objectShop = JSON.parse(stringShop);
console.log(typeof objectShop);