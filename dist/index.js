// let id: number = 5;
// let myName: string = "Wasok";
// let isPublished: boolean = true;
// let x: any = "Hello";
// const student : Human = {
//     id:123,
//     name:"Somchai",
//     age:30,
//     tel: "0940000000",
//     move:function():string{
//         return "Running";
//     },
//     eat:function():string{
//         return "Running";
//     }
// }
// console.log(student.move());
// const grandMom : Human = {
//     id:9,
//     name:"Pao",
//     age:60,
//     move:function():string{
//         return "CrawLing";
//     },
//     eat:function():string{
//         return "Running";
//     }
// }
// // Wasok
// const boxer : Human = {
//     id:10,
//     name:"Tanad",
//     age:42,
//     tel:"0800010001",
//     move:function():string{
//         return "Jump";
//     },
//     eat:function():string{
//         return "Eat Chicken ";
//     }
// }
// console.log(grandMom.move());
//Class
class Driver {
    //arg-constructor
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} moves by driving`;
    }
    eat() {
        return `${this.name} eats by rice.`;
    }
}
const d1 = new Driver(101, "Anurak", 20);
// console.log(d1.move());
// console.log(d1.eat());
//Generic//ยังไม่รู้ type ตอนสร้าง
function getArray(items) {
    return new Array().concat(items);
}
let n1 = [1, 2, 3, 4];
let n2 = ["A", "B", "C", "D"];
console.log(getArray([n1, n2]));
//Q1. สร้าง Tuple ของนักเรียน [id,name,mid,final,project,grade]
//                        [1,'Name',20,50,30,""]
//Output: <id>:<name>, Total:<mid+final+project>, Grade: <grde>
//Filename: Wasok_Q1.ts
//Q2. implement 1 อาชีพ จาก Human
//แสดง implement move(), eat()
//แสดงการสร้าง object
//Filename: Wasok_Q2.ts
