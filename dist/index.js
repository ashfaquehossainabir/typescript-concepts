"use strict";
let id = 5;
let company = 'Abir Productions';
let isPublished = true;
let msg = 'Hello World!';
console.log("ID: ", id);
console.log('My Company Name: ' + company);
console.log('Published: ' + isPublished);
console.log('Message: ' + msg);
let ids = [1, 2, 3, 4, 5];
let listId = [1, 2, 3, 4, 5, true, "Abir"];
ids.push(6);
console.log("Ids: ", ids);
console.log("List Ids: ", listId);
let listOfIds = [1, "Ashfaque", false];
console.log("List of Ids: ", listOfIds);
let employee;
employee = [
    [1, "Ashfaque Hossain Abir"],
    [2, "Nijhu Zaman Chowdhury"],
    [3, "Mohid Ahmed"],
    [4, "Robiul Islam Chamak"],
    [5, "Sadaf Kibria Sufal"],
    [6, "Mohammed Sadeq"]
];
console.log("List of employee names", employee);
let uid;
uid = "Ashfaque" + 2024;
console.log("UID: " + uid);
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
console.log("Direction Index: " + Direction1.down);
var Direction2;
(function (Direction2) {
    Direction2["up"] = "Up";
    Direction2["down"] = "Down";
    Direction2["left"] = "Left";
    Direction2["right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log("Direction: " + Direction2.down);
const userInfo = {
    id: 1,
    name: "Ashfaque Hossain Abir"
};
console.log(`UserID: ${userInfo.id}, `, `UserName: ${userInfo.name}`);
const user = {
    id: 2,
    name: "Nijhu Zaman Chowdhury"
};
console.log(`UserID: ${user.id}, `, `UserName: ${user.name}`);
let cid = 1;
let customerId = cid;
let customerID = cid;
function addNum(x, y) {
    return x + y;
}
console.log("1 + 2 =", addNum(1, 2));
function log(message) {
    console.log(message);
}
log("Welcome to " + 2024);
const user2 = {
    id: 3,
    name: "Mohid Ahmed",
    age: 25
};
console.log(`UserID: ${user2.id}, `, `UserName: ${user2.name},  Age: ${user2.age}`);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
console.log("Add: " + add(2, 3));
console.log("Sub: " + sub(3, 2));
console.log("Mul: " + mul(2, 3));
console.log("Div: " + div(3, 2));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const abir = new Person(1, "Ashfaque Hossain Abir");
console.log(abir.register());
console.log(abir);
const nijhu = new Person(2, "Nijhu Zaman Chowdhury");
console.log(nijhu.register());
console.log(nijhu);
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const empMohid = new Employee(3, "Mohid Ahmed", "Manager");
console.log(empMohid.register());
console.log(empMohid);
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["Abir", "Nijhu", "Mohid", "Chamak", "Sadaf"]);
numArray.push(6);
strArray.push("Anowar");
console.log("Num Array: " + numArray);
console.log("String Array: " + strArray);
