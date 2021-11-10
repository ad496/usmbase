import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./components/models/menuHome.css"
import "./components/models/orderTree.css"
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import WrapperSideBar, {BarData} from "./components/sidebar/WrapperSideBar";
import {barData} from "./components/models/MStartMenu";
import {barDataTree} from "./components/models/MOrederTree";


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

{
    barData.closeWidth=60;// ширина зарытого
    barData.openWidth=200;// ширина открытого
    barData.isOpen=true;  // состояние  - открыто
    new WrapperSideBar(barData,"root")
    barData.on("onclick",(menuitem)=>{
        if(menuitem.href==="orders"){
            {
                barDataTree.closeWidth=60;// ширина зарытого
                barDataTree.openWidth=800;// ширина открытого
                barDataTree.isOpen=true;  // состояние  - открыто
                new WrapperSideBar(barDataTree,"root2")
            } 
        }
    })
}





registerServiceWorker();

