// let id: number = 5;
// let myName: string = "Wasok";
// let isPublished: boolean = true;
// let x: any = "Hello";

// console.log("ID: " + typeof(id) + " " + id);
// console.log("My name: " + typeof(myName) + " " + myName);
// console.log("isPublished: " + typeof(isPublished) + " " + isPublished);
// console.log("x: " + typeof(x) + " " + x);
// x = 3 < 2;
// console.log("x: " + typeof(x) + " " + x);

// let age: number = 19;
// console.log(`My name is ${myName}. I am ${age} years old.`);

// let ids: number[];
// ids = [1,2,3,4,5];
// console.log(ids);
// let arr: any[];
// arr = [1, "2", true , 3.5];
// console.log(arr);

// let friendName: string[];
// friendName = ["Thanakit","kongpop","jakrit","Basza","Taned"];
// console.log(friendName);

// ids.forEach(i => {
//      console.log(`ID: ${i}`);
// });

// console.log(`ฉันชื่อ ${myName} นีืคือเพื่อนของฉัน`);
// friendName.forEach(i => {
//     console.log(`- ${i}`);
// });

// let salary: number[] = [1000,2000,5000,10000];
// let commission: number[]=[];

// salary.forEach((s)=>{
//     commission.push(s*0.1);
// });

// console.log(commission);

// let bonus: number[] = [];
// salary.forEach((s)=>{
//     if(s<1001){
//         bonus.push(s*2);
//     }else if(s<5001){
//         bonus.push(s*1.5);
//     }else if(s<10001){
//         bonus.push(s*1.2);
//     }else{
//         bonus.push(s*1);
//     }
// });
// console.log(bonus);

//Tuple ---> 1 record
// let prod1: [number,string,string,number];
// prod1 = [1,"Chocolate","Pack",100];

// console.log(prod1[0]);
// console.log(prod1[1]);
// console.log(prod1[2]);
// console.log(prod1[3]);

// prod1.forEach(p=>{
//     console.log(p);
// });

// let products: [number,string,string,number][];
// products=[
//     [1,"Strawberry","pcs",20],
//     [2,"Apple","pcs",25],
//     [3,"Banana","pcs",10],
//     [4,"Kiwi","pcs",30],
//     [5,"Orange","pcs",25]
// ];
// console.log(products);

// console.log("All Product");
// products.forEach(p=>{
//     console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`);
// });

// let studens: [string,string,number,number,number][];

// studens = [
//     ["1001","Kongpop",20,50,0],
//     ["1002","Jakrit",18,42,0],
//     ["1003","Wasok",20,21,0],
//     ["1004","Thanakit",15,35,0],
//     ["1005","Thanakorn",17,31,0]
// ];

// studens.forEach(s=>{
//     s[4] = s[2] + s[3];
//     console.log(`${s[0]}: ${s[1]}, Total: ${s[4]}`);
// });

// enum Direction1{
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// enum Direction2{
//     Up = "Up",
//     Down = "Down",
//     Left = "Left",
//     Right = "Right"
// }
// console.log(Direction1);
// console.log(Direction2);

//สร้าง pdf
//setPaper(size, orientation)
//0:A3 1:A4 2:A5 3:A6
//1: Portrait 0:Landscape

// enum PaperSize{
//     A4 = 1,
//     A5 = 2,
//     A6 = 3,
// }
// enum Orientation{
//     Portrait = 1,
//     Lanscape = 2
// }

// Defined Type (Object)
// type Student = {
//     id:number,
//     name:string,
//     tel:string,
//     line_id?:string
// }

// let wasok: Student = {
//     id:101,name:"Wasok",tel:"0940000000",   
// };

// console.log(wasok.id);

// Union Type
// let sid : number | string;
// sid = 101;
// console.log(typeof(sid));

// sid = "555";
// console.log(typeof(sid));

//function
// function addNumber(x:number,y:number):number{
//     return x + y;
// }

// console.log(addNumber(1,3));

// function showLog(m:number|string):void{
//     console.log(m);
// }

// showLog(123);
// showLog("456");

//Interface Func.
//โครงเปล่า ๆ ของฟังชัน ยังไม่ได้กำหนดการทำงาน
// interface MathFunc{
//     (x:number,y:number):number
// }

// const addNum : MathFunc = (x:number,y:number):number => {return x+y};
// const subNum : MathFunc = (x:number,y:number): number => x-y;

// console.log(addNum(5,7));
// console.log(subNum(5,7));

//Interface classes
interface Human{
    id:number,
    name:string,
    age:number,
    tel?:string,
    //func as a property
    move():string
    eat():string
}

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
class Driver implements Human{
    id: number;
    name: string;
    age: number;

    //arg-constructor
    constructor(id:number,name:string,age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    move(){
        return `${this.name} moves by driving`;
    }

    eat(){
        return `${this.name} eats by rice.`;
    }
}

const d1 = new Driver(101,"Anurak",20);
// console.log(d1.move());
// console.log(d1.eat());

//Generic//ยังไม่รู้ type ตอนสร้าง
function getArray<T>(items:T[]): T[]{
    return new Array().concat(items);
}

let n1 = [1,2,3,4];
let n2 = ["A","B","C","D"];

console.log(getArray([n1,n2]));

//Q1. สร้าง Tuple ของนักเรียน [id,name,mid,final,project,grade]
//                        [1,'Name',20,50,30,""]
//Output: <id>:<name>, Total:<mid+final+project>, Grade: <grde>
//Filename: Wasok_Q1.ts

//Q2. implement 1 อาชีพ จาก Human
//แสดง implement move(), eat()
//แสดงการสร้าง object
//Filename: Wasok_Q2.ts