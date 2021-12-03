import {Component} from "react";
import ReactDOM from "react-dom";
import React from "react";
import Form from 'react-bootstrap/Form'
import {Button} from "react-bootstrap";
import {barDataTree} from "./BarDataTree";
import {DialogAlert, DialogModalAsync} from "modaldialogion";
import {SearchDialog} from "./searchdialog/SearchDialog";
import {DialogButton} from "modaldialogion/dist/DialogData";
import FetchServerPost, {RequestUsm} from "./Fetcher/FetchServer";

import {parserUrl} from "./models/ParserUrl";
import uon from "uon";
import {observer} from "../ObserverMenu";


export class SearcherTree extends Component{
    constructor() {
        super(); 
        this.refE=React.createRef()
        this.search.bind(this)
      
       
       

   
    }
    search(){
        if(!barDataTree){
            DialogAlert({head:"Поиск по коду",body:"Ордера не активированы из данной базы!"})
            return
        }
        const v=this.refE.current.value.trim()
        if(!v){
            DialogAlert({head:"Поиск по коду",body:"Строка поиска пустая"})
            return;
        }
        const list=[];
        list.push(new DialogButton("Ok",1,"primary"));
        list.push(new DialogButton("Cancel",-1,"primary",true))
        DialogModalAsync({head:"Выберите что будем искать",
            body:<SearchDialog/>,listButton:list}).then(value => {
                if(value.ok===true){
                    this._searchCore(value.formData.result)
                }
            console.log(value)
        }).catch(reason => {
            console.error(reason)
        })
        
      
        
    }
    _searchCore(type){
      
        const o=observer.getObUrl();
        console.log(o)

        const b = new RequestUsm();
        b.base=o.base
        b.searchTree.type=type;
        b.searchTree.str=this.refE.current.value
        console.log("eee",b)
        const f = new FetchServerPost({url: "/api/core/", body: b,menu:null});
        f.run((data) => {

          console.log("rrespoce",data)


        }, (e)=>{
            console.error(e)
        }, null)
    }
   
    
    render() {
        return (
            <div className="row">
                <div className="col">
                    <Form.Control ref={this.refE}  type="text" placeholder="search code"/> 
                </div>
                <div className="col-auto">
                    <Button variant="primary" onClick={this.search.bind(this)}>Search</Button> 
                </div>
           
            
        </div>)
    }
           
   
}