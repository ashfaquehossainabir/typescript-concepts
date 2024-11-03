// Basic Types
let id: number = 5
let company: string = 'Abir Productions'
let isPublished: boolean = true
let msg: any = 'Hello World!'

console.log("ID: ", id)
console.log('My Company Name: ' + company)
console.log('Published: ' + isPublished)
console.log('Message: ' + msg)


// Array
let ids: number[] = [1, 2, 3, 4, 5]
let listId: any[] = [1, 2, 3, 4, 5, true, "Abir"]

ids.push(6)

console.log("Ids: ", ids)
console.log("List Ids: ", listId)


// Tuple
let listOfIds: [number, string, boolean] = [1, "Ashfaque", false]

console.log("List of Ids: ", listOfIds)


// Tuple Array
let employee: [number, string][]

employee = [
    [1, "Ashfaque Hossain Abir"],
    [2, "Nijhu Zaman Chowdhury"],
    [3, "Mohid Ahmed"],
    [4, "Robiul Islam Chamak"],
    [5, "Sadaf Kibria Sufal"],
    [6, "Mohammed Sadeq"]
]

console.log("List of employee names", employee)


// Union
let uid: number | string

uid = "Ashfaque" + 2024

console.log("UID: " + uid)

// Enum

enum Direction1 {
    up,
    down,
    left,
    right
}

console.log("Direction Index: " + Direction1.down)

enum Direction2 {
    up = 'Up',
    down = 'Down',
    left = 'Left',
    right = 'Right'
}

console.log("Direction: " + Direction2.down)


// Objects
const userInfo: { id: number, name: string } = {
    id: 1,
    name: "Ashfaque Hossain Abir"
}

console.log(`UserID: ${userInfo.id}, `, `UserName: ${userInfo.name}`)


// Objects [Way- 2]
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 2,
    name: "Nijhu Zaman Chowdhury"
}

console.log(`UserID: ${user.id}, `, `UserName: ${user.name}`)


// Type Assertion
let cid: any = 1

let customerId = <number>cid

let customerID = cid as number


// Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log("1 + 2 =", addNum(1, 2))


// Void
function log(message: string | number): void {
    console.log(message)
}

log("Welcome to " + 2024)


// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number  // Age is optional. (?) this sign indicates optional for declaration.
}

const user2: UserInterface = {
    id: 3,
    name: "Mohid Ahmed",
    age: 25
}

// user2.id = 4  // --> So, this cannot reassign because user2.id is a readonly property

console.log(`UserID: ${user2.id}, `, `UserName: ${user2.name},  Age: ${user2.age}`)


// Interfaces (Way- 2)
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y
const mul: MathFunc = (x: number, y: number): number => x * y
const div: MathFunc = (x: number, y: number): number => x / y

console.log("Add: " + add(2, 3))
console.log("Sub: " + sub(3, 2))
console.log("Mul: " + mul(2, 3))
console.log("Div: " + div(3, 2))


// Classes
interface PersonInterface {
    readonly id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id: number  // -> [protected, public] --> So, private locks id. You can't reassign this value
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const abir = new Person(1, "Ashfaque Hossain Abir")

// abir.id = 3  // --> id is private. So, this is accessible within the class

console.log(abir.register())
console.log(abir)

const nijhu = new Person(2, "Nijhu Zaman Chowdhury")

console.log(nijhu.register())
console.log(nijhu)


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name) // So, this will copy id and name from Person Class
        this.position = position
    }
}

const empMohid = new Employee(3, "Mohid Ahmed", "Manager")

console.log(empMohid.register())
console.log(empMohid)


// Generics
function getArray<Type>(items: Type[]): Type[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(["Abir", "Nijhu", "Mohid", "Chamak", "Sadaf"])

numArray.push(6)
strArray.push("Anowar")

console.log("Num Array: " + numArray)
console.log("String Array: " + strArray)