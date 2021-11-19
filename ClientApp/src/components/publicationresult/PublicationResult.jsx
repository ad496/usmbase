import {Component} from "react";
import {parserUrl} from "../models/ParserUrl";
import ReactDOM from "react-dom";
import React from "react";
import "./publishResult.css"
import uon from "uon";
import {barDataTree} from "../BarDataTree";
import ListGroup from 'react-bootstrap/ListGroup'

export class PublicationResult extends Component {
constructor() {
    super();
 
   
    this.state={
        obUrl:undefined
    }
    uon((s)=>{
        if(s.includes('orders')){
            if(s.length>10){
                
                this.setState({obUrl:parserUrl.getObject(s)})
                this.init()
            }else{
                this.setState({obUrl:undefined})
            }
        }else{
            this.setState({obUrl:undefined})
        }
       
    })
}  
init(){
   
    if(barDataTree[0]&&barDataTree[0].menuItems){
        barDataTree[0].refreshMap()
    }
}


    // this.base=undefined;
    // this.ordername=undefined;
    // this.order=undefined;
    // this.pallet=undefined;
    // this.box=undefined;
    // this.block=undefined;
    // this.pack=undefined;

//dateCreate: "2020-11-15T08:53:20.869468"
//firstName: "Сигариллы с фильтром"
//info: "75 Коробов"
//lastName: "С ароматом Dark crema"
//lineNom: "ManualAssembly"
//ordNom: "629"
//ordText: "\"DAKOTA\""
//orderKey: "aebf289d-be28-4b35-8c12-fc99b047edf4"
//pkCount: 99000
//pkPrice: 0
   
innerOrder(){
   const order= this.state.obUrl.order;
   const orderO=barDataTree[0].mapMenu.get(order)
    const userData=orderO?.userData??undefined
    console.log(userData)
    if(userData){
        return(  
             <div className="orderDiv">
                 <div className="wrapper">
                     <div className="styleA">Имя:</div>
                     <div>{"Заказ: "+userData.firstName+" "+userData.ordText+" "+userData.lastName}</div>
                     <div className="styleA">Дата создания:</div>
                     <div>{userData.dateTimeToString}</div>
                     <div className="styleA">Номер заказа:</div>
                     <div>{userData.ordNom}</div>
                     <div className="styleA">Линия:</div>
                     <div>{userData.lineNom}</div>
                     <div className="styleA">Количество:</div>
                     <div>{userData.pkCount}</div>
                     <div className="styleA">Цена:</div>
                     <div>{userData.pkPrice}</div>
                     <div className="styleA">Примечание:</div>
                     <div>{userData.info}</div>
                     <div className="styleA">OrderKey:</div>
                     <div>{userData.orderKey}</div>
                 </div>
             </div>
        );
    }
}

    // dateTime: "2021-03-22T22:52:33.126"
    // dateTimeToString: "22.03.2021 22:52"
    // id: "da76a45c-351a-4a11-989b-ccb5d0407586"
    // km: "00009996660005001641"
    // numberItem: 1
    // orderKey: "2f1758e9-dfb7-4f1e-a3f9-6e664e496c68"
    innerPallet(){
        const pallet= this.state.obUrl.pallet;
        if(!pallet) return 
        const orderO=barDataTree[0].mapMenu.get(pallet)
        const userData=orderO?.userData??undefined
        if(userData){
            return(
                <div className="palletDiv">
                    <div className="wrapper">
                        <div className="styleA">Имя:</div>
                        <div>{"Паллета id: "+userData.id}</div>
                        
                        <div className="styleA">Номер:</div>
                        <div>{"№: "+userData.numberItem}</div>
                        
                        <div className="styleA">Код:</div>
                        <div>{userData.km}</div>
                        
                        <div className="styleA">Модификация:</div>
                        <div>{userData.dateTimeToString}</div>
                        
                    </div>
                </div>
            );
        }
    }

    innerBox(){
        const box= this.state.obUrl.box;
        if(!box) return
        const orderO=barDataTree[0].mapMenu.get(box)
        const userData=orderO?.userData??undefined
        if(userData){
            return(
                <div className="boxDiv">
                    <div className="wrapper">
                        <div className="styleA">Имя:</div>
                        <div>{"Короб id: "+userData.id}</div>

                        <div className="styleA">Номер:</div>
                        <div>{"№: "+userData.numberItem}</div>

                        <div className="styleA">Код:</div>
                        <div>{userData.km}</div>

                        <div className="styleA">Модификация:</div>
                        <div>{userData.dateTimeToString}</div>

                    </div>
                </div>
            );
        }
    }

    innerBlock(){
        const block= this.state.obUrl.block;
        if(!block) return
        const orderO=barDataTree[0].mapMenu.get(block)
        const userData=orderO?.userData??undefined
        if(userData){
            return(
                <div className="blockDiv">
                    <div className="wrapper">
                        <div className="styleA">Имя:</div>
                        <div>{"Блок id: "+userData.id}</div>

                        <div className="styleA">Код:</div>
                        <div>{userData.km}</div>

                        <div className="styleA">Модификация:</div>
                        <div>{userData.dateTimeToString}</div>

                    </div>
                </div>
            );
        }
    }

    innerPack(){
        const pack= this.state.obUrl.pack;
        if(!pack) return
        const orderO=barDataTree[0].mapMenu.get(pack)
        const userData=orderO?.userData??undefined
        if(userData){
            return(
                <div className="packDiv">
                    <div className="wrapper">
                        <div className="styleA">Имя:</div>
                        <div>{"Пачка id: "+userData.id}</div>

                        <div className="styleA">Код:</div>
                        <div>{userData.km}</div>

                        <div className="styleA">Модификация:</div>
                        <div>{userData.dateTimeToString}</div>

                    </div>
                </div>
            );
        }
    }
innerRender(){
    if(this.state.obUrl){
        return(
            < >
                {this.innerOrder()}
                {this.innerPallet()}
                {this.innerBox()}
                {this.innerBlock()}
                {this.innerPack()}
        </>)
    }else{
        return (<div/>)
    }
}

render() {
    return(<>{this.innerRender()}</>);
}

}