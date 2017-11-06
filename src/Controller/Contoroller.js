import {Programs} from './Objects';
import React from 'react';
import request from 'request';

export class Controller {
    constructor() {
        this.Programs = Programs;
        this.Popups = [];
        this.DesktopBackground = '#008483';
        this.startVisible = false;
        this.rightVisible = false;
        request.get('https://transgineering-blog.herokuapp.com/', (err, res, body) => {
            console.log(err);
            console.log(res);
            console.log(body);
        });
    }

    getAll() {
        return this.Programs;
    }

    showStart()  {
        this.startVisible = true;
    }

    hideStart() {
        this.startVisible = false;
    }

    showRight(){
        this.rightVisible = true;
    }

    hideRight(){
        this.rightVisible = false;
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
            this.addPop('Error', <div><p style={{marginTop: '10px'}}> Name Already Exists</p></div>);
        }
        else{
            this.getOne(name).name = newName;
        }
    }

    delete(name){
        for(let x = 0; x < this.Programs.length; x++){
            if(Programs[x].name === name){
                this.Programs = this.Programs.slice(0,x).concat(this.Programs.slice(x+1));
                return;
            }
        }
    }

    addPop(name,content){
        this.Popups.push({name: name, content: content})
    }

    changeColor(color){
        this.DesktopBackground = color;
    }
}
