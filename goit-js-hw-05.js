// Task 1

// function Account(data) {
//   this.login = data.login;
//   this.email = data.email;
// }

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// }


// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo();

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo();



// Task 2

// class User {
//   constructor(data) {
//       this.name = data.name;
//       this.age = data.age;
//       this.followers = data.followers;
//   }
//   getInfo() {
//       console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo();

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo();



// Task 3

// class Storage {
//   constructor(items) {
//       this.items = items;
//   }
//   getItems() {
//       return this.items;
//   }
//   addItem(itemName) {
//       this.items.push(itemName);
//   }
//   removeItem(itemName) {
//       let isDeleted = false;
//       for (const item of this.items) {
//           if (item === itemName) {
//               const index = this.items.indexOf(item);
//               this.items.splice(index, 1);
//               isDeleted = true;
//           }
//           if (this.items.indexOf(item) === this.items.length - 1 && !isDeleted) {
//               console.log('Немає такого елемента. Перевірте чи правильно ви вказали назву');
//           }
//       }
//   }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.log(items); 
// storage.addItem('Дроїд');
// console.log(storage.items); 
// storage.removeItem('Пролонгер');
// console.log(storage.items);


// Task 4

// class StringBuilder {
//   _value = '';
//   constructor(value) {
//       this._value = value;
//   }
//   append(str) {
//       this._value = this._value + str;
//   }
//   prepend(str) {
//       this._value = str + this._value;
//   }
//   pad(str) {
//       this._value = str + this._value + str;
//   }
//   get value() {
//       return this._value;
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value);

// builder.prepend('^');
// console.log(builder.value); 

// builder.pad('=');
// console.log(builder.value);


// Task 5

// class Car {
//   #price = 0;


//   static getSpecs(car){
//       console.log('maxSpeed - ' + car.maxSpeed + ', ' + 'speed - ' + car.speed + ', ' + 'isOn - ' + car.isOn + ', ' + 'distance - ' + car.distance + ', ' + 'price - ' + car.#price);
//   }

//   constructor(data) {
//       this.speed = 0;
//       this.#price = data.price
//       this.maxSpeed = data.maxSpeed;
//       this.isOn = false;
//       this.distance = 0;
//   }

 
//   get price(){
//       return this.#price;
//   }

//   set price(amount){
//       this.#price = amount;
//   }

//   turnOn() {
//       this.isOn = true;
//   }

//   turnOff() {
//       this.isOn = false;
//       this.speed = 0;
//   }

//   accelerate(value) {
//       if((this.speed + value) < this.maxSpeed){
//           this.speed += value;
//       } else{
//           console.log('Занадто велика швидкість');
//       }
//   }


//   decelerate(value) {
//       if((this.speed - value) > 0){
//           this.speed -= value;
//       } else{
//           console.log('Занадто мала швидкість');
//       }
//   }


//   drive(hours) {
//       if(this.isOn){
//           this.distance = hours * this.speed;
//       }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);

// console.log(mustang.price); 
// mustang.price = 4000;
// console.log(mustang.price);