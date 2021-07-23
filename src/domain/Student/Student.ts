'use strict'
import {StudentInterface} from './StudentInterface'

 class Student implements StudentInterface {
     id: string;
    name: string;
    age: number;
    genre: string;

     constructor(id:string,name:string, age:number, genre:string){
         this.id = id;
        this.name = name;
        this.age = age;
        this.genre = genre;
    }

}

export {Student}
    
