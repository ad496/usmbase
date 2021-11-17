import "./components/Init"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./components/models/menuHome.css"
import "./components/models/orderTree.css"


import registerServiceWorker from './registerServiceWorker';
import WrapperSideBar from "./components/sidebar/WrapperSideBar";
import {barData} from "./components/models/MStartMenu";

import{ObserverMenu} from "./ObserverMenu";
import ReactDOM from "react-dom";
import {PublicationResult} from "./components/publicationresult/PublicationResult";
import {TiInputCheckedOutline} from "react-icons/all"





const ob=new ObserverMenu('root2')






barData.closeWidth = 60;// ширина зарытого
barData.openWidth = 200;// ширина открытого
barData.isOpen = true;  // состояние  - открыто
new WrapperSideBar(barData, "root")

ReactDOM.render(
    <PublicationResult/>
    ,
    document.getElementById("root3")
);


registerServiceWorker();

