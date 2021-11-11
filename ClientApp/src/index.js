import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./components/models/menuHome.css"
import "./components/models/orderTree.css"


import registerServiceWorker from './registerServiceWorker';
import WrapperSideBar from "./components/sidebar/WrapperSideBar";
import {barData} from "./components/models/MStartMenu";
import FetchServerPost, {RequestUsm} from "./components/Fetcher/FetchServer"
import {
    OrderMediator,
    PalletMediator,
    BoxtMediator,
    BlockMediator,
    PackMediator
} from "./components/Fetcher/OrderMediator"
import ReactDOM from "react-dom";


let barDataTree;

function fetchError(e) {
    console.error(" ion fetch error:", e)
}

function callbackTree(menuItem) {
    if (menuItem.userData2 === true) {
        return;
    }
    switch (menuItem.userData1) {
        case "order": {
            const b = new RequestUsm();
            b.base = "suz";
            b.where = menuItem.id;
            b.table = "pallet"
            const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
            f.run((data) => {

                data.map((o) => {
                   
                    menuItem.menuItems.push(o);
                    return false;
                })
                menuItem.userData2 = true;
                barDataTree.forceUpdate();


            }, fetchError, PalletMediator)
            break
        }
        case "pallet": {
            const b = new RequestUsm();
            b.base = "suz";
            b.where = menuItem.id;
            b.table = "box"
            const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
            f.run((data) => {

                data.map((o) => {
                  
                    menuItem.menuItems.push(o);
                    return false;
                })
                menuItem.userData2 = true;
                barDataTree.forceUpdate();
            }, fetchError, BoxtMediator)
            break
        }
        case "box": {
            const b = new RequestUsm();
            b.base = "suz";
            b.where = menuItem.id;
            b.table = "block"
            const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
            f.run((data) => {

                data.map((o) => {
                    menuItem.menuItems.push(o);
                    
                    return false;
                })
                menuItem.userData2 = true;
                barDataTree.forceUpdate();
            }, fetchError, BlockMediator)
            break
        }
        case "block": {
            const b = new RequestUsm();
            b.base = "suz";
            b.where = menuItem.id;
            b.table = "pack"
            const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
            f.run((data) => {

                data.map((o) => {
                   
                    menuItem.menuItems.push(o);
                    return false;
                })
                menuItem.userData2 = true;
                barDataTree.forceUpdate();
            }, fetchError, PackMediator)
            break

        }
        case "pack": {
            break
        }
        default: {
            console.error("не могу обработать: " + menuItem.userData1)
            break
        }
    }
}

function callbackMenu(menuitem) {
    ReactDOM.unmountComponentAtNode(document.getElementById("root2"));
    if (menuitem.href === "orders") {


        const b = new RequestUsm();
        b.base = "suz";
        b.where = undefined;
        b.table = "order"
        const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuitem});
        f.run((data) => {

            data.closeWidth = 60;// ширина зарытого
            data.openWidth = 800;// ширина открытого
            data.isOpen = true;  // состояние  - открыто
            barDataTree = data;
            new WrapperSideBar(data, "root2")
            data.on("onclick", callbackTree)


        }, fetchError, OrderMediator)


    }
}


barData.closeWidth = 60;// ширина зарытого
barData.openWidth = 200;// ширина открытого
barData.isOpen = true;  // состояние  - открыто
new WrapperSideBar(barData, "root")

barData.on("onclick", callbackMenu)


registerServiceWorker();

