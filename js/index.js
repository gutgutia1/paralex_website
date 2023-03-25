console.log("hi")
// // rectangle={
// //     length:1,
// //     breadth:2,
// //     draw: function(){
// //         console.log("draw is ")
// //     }
// // }

// function createReactangle(len,bre){
//     return rectangle={
//         length:len,
//     breadth:bre,
//     draw: function(){
//         console.log("draw is ",len)
//     }
//     }
// }

// rectangle1= createReactangle(1,2)
// rectangle2= createReactangle(2,3)

// courses=[
//     {roll:1,name:"piyush"},
//     {roll:2,naam:"aohit"}
// ]
// numbers=[1,10,6,5]
// console.log(numbers.sort(function(n1,n2){
//    if(n1>n2){
//     return 1
//    }
//    else if (n2>n1){
//     return -1
//    }
//    else{
//     return 0
//    }
// }))
// // console.log(courses.find(course=> course.name == "piyush"))

// // console.log("aiyush"<"bohit")
// courses.sort(function(p1,p2){
//     if(p1.name > p2.name){
//         console.log(p1.name > p2.name)
//         return 1
//     }
//     else if (p1.name < p2.name){
//         console.log(p1.name > p2.name)
//         return -1
//     }
//     else{
//         console.log(p1.name > p2.name)
//         console.log(p1.name< p2.name)
//         return 0
//     }
// })

// console.log(courses)

// person={
//     name:"love",
//     lname:"piyush"
// }

// function fname(){
//     console.log(`${person.name} kkk`)
// }

// fname()

// function eventadd(){
//     console.log("clicked bete")
// }

// eventdel=eventadd

// document.addEventListener("click",eventadd)

// // document.removeEventListener("click",eventdel)

// links=document.querySelectorAll('a')
// thirdlink=links[2]
// thirdlink.addEventListener("click",function(event){
//     event.preventDefault()
//     console.log("chala")
// })

// let eleme=document.querySelector("#wrapper")
// eleme.addEventListener("click",function(event){
//     if (event.target.nodeName === "SPAN")
//         console.log("span is cliocked",event.target.textContent)
// }) 
let t1=performance.now()
for (let i=0;i<100;i++){
    let para=document.createElement("p")
    para.textContent="this is para " + i

    document.body.append(para)
}
let t2=performance.now()

console.log(t2-t1)

let t3=performance.now()
divi=document.createElement("div")
for (let i=0;i<100;i++){
    let para=document.createElement("p")
    para.textContent="this is para " + i

    divi.append(para)
}
document.body.append(divi)

let t4=performance.now()
console.log(t4-t3)
