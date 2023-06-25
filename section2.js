'use strict';

let obj = {
    name:"shashank",
    age:28,
    city:"delhi",
    country:"india",
    Job:  function(){
        this.work = "Engineer";
        return `He works in ${this.city} and as a ${this.work}`
    },
    getsummary : function(){
        return `Shashank age is ${this.age} and lives in ${this.city} and works as ${this.work} `
    }

}

console.log(obj.Job());
console.log(obj.work)

console.log(obj.getsummary())



