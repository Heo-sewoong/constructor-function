// const person1 = {
//   name: '철수',
//   age: 20
// }

// console.log(person1)


// function Person(name, age){
//   this.name = name,
//   this.age = age;
// }

// const person2 = new Person('세웅', 20);
// const person3 = new Person('영희', 25);

// console.log(person2)
// console.log(person3)

function Man(name, age){
  this.name = name;
  this.age = age;
  this.introduce = function(){
    return `제 이름은 ${this.name}이고 ${this.age}살 입니다.`;
  }
}

const man = new Man('하루', 100)
console.log(man.introduce())
