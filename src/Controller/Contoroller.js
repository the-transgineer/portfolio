import {Programs} from './Objects';

export class Controller {
    constructor(){
        this.Programs = Programs;
    }

    getAll(){
        return this.Programs;
    }

    getOne(name){
        for(let i = 0; i < this.Programs.length; i++){
            if(this.Programs[i].name === name){
                return this.Programs[i];
            }
            return 'Not Found';
        }
    }

}