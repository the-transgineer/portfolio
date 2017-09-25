import {Programs} from './Objects';
import React from 'react';


export class Controller {
    constructor() {
        this.Programs = Programs;
        this.Popups = [];
        this.DesktopBackground = '#008483';
        console.log(this.Popups);
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
        return false;
    }

    toggleVisible(name) {
        this.getOne(name).visible = !(this.getOne(name).visible);
    }

    toggleMax(name) {
        this.getOne(name).maximised = !this.getOne(name).maximised;
    }

    rename(name, newName){
        if(this.getOne(newName)){
            this.addPop('Error', <p style={{marginTop: '10px'}}> Name Already Exists</p>);
        }
        else{
            this.getOne(name).name = newName;
        }
    }

    delete(name){
        for(let x = 0; x < Programs.length; x++){
            if(Programs[x].name === name){
                this.Programs = this.Programs.slice(0,x).concat(this.Programs.slice(x+1));
                return;
            }
        }
    }

    addPop(name,content, visible=false){
        this.Popups.push({name: name, content: content, visible: visible})
    }
}
