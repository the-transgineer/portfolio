import {Programs} from './Objects';


export class Controller {
    constructor() {
        this.Programs = Programs;
    }

    getAll() {
        return this.Programs;
    }

    getOne(name) {
        for (let i = 0; i < this.Programs.length; i++) {
            if (this.Programs[i].name === name) {
                return this.Programs[i];
            }
        }
        return 'Not Found';
    }

    toggleVisible(name) {
        this.getOne(name).visible = !(this.getOne(name).visible);
    }

    toggleMax(name) {
        this.getOne(name).maximised = !this.getOne(name).maximised;
    }

    rename(name, newName){
        this.getOne(name).name = newName;
    }

    delete(name){
        for(let x = 0; x < Programs.length; x++){
            if(Programs[x].name === name){
                this.Programs[x] = {};
            }
        }
    }
}
