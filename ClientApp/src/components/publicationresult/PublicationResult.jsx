import {Component} from "react";
import {parserUrl} from "../models/ParserUrl";
import ReactDOM from "react-dom";
import React from "react";
import "./publishResult.css"
import uon from "uon";
import {barDataTree} from "../BarDataTree";

export class PublicationResult extends Component {
constructor() {
    super();
 
   
    this.state={
        obUrl:undefined
    }
    uon((s)=>{
        if(s.includes('orders')){
            if(s.length>10){
                console.log("344",s)
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
    console.log(barDataTree[0])
    if(barDataTree[0]&&barDataTree[0].menuItems){
        barDataTree[0].refreshMap()
    }
}
innerRender(){
    if(this.state.obUrl){
        return(
            <div >
            <div><h1>p </h1></div>
        <div><h1>dsodiosiddsoi</h1></div>
        <div><h1>dsodiosiddsoi</h1></div>
        <div><h1>dsodiosiddsoi</h1></div>
        </div>)
    }else{
        return (<div/>)
    }
}

render() {
    return(<>{this.innerRender()}</>);
}

}