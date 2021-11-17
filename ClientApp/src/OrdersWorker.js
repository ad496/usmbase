import FetchServerPost, {RequestUsm} from "./components/Fetcher/FetchServer"
import {
    OrderMediator,
    PalletMediator,
    BoxtMediator,
    BlockMediator,
    PackMediator
} from "./components/Fetcher/OrderMediator"
import WrapperSideBar from "./components/sidebar/WrapperSideBar";
import {barDataTree} from "./components/BarDataTree";

import ReactDOM from "react-dom";
import React from "react";
import App from "./components/sidebar";

import {PublicationResult} from "./components/publicationresult/PublicationResult";

export class OrdersWorker{
    constructor(root,base=1) {
        this._root = root;
        this._base = base;
        
        
        this.init()
    }
     fetchError=(e)=> {
         console.error(" ion fetch error:", e)
     }
    init(){
       
        const b = new RequestUsm();
        b.base = this._base;
        b.where = undefined;
        b.table = "order"
        const f = new FetchServerPost({url: "/api/core/", body: b,menu:null});
        f.run((data) => {

            data.closeWidth = 60;// ширина зарытого
            data.openWidth = 800;// ширина открытого
            data.isOpen = true;  // состояние  - открыто
            barDataTree[0] = data;
            new WrapperSideBar(data, this._root);
            data.on("onclick", this.callbackTree.bind(this))
            this.publishResult(data)

        }, this.fetchError, OrderMediator)

        
        
    }
    publishResult(data){
       
       
   
    }
         
     callbackTree(menuItem) {
        if (menuItem.userData2 === true) {
            return;
        }
        switch (menuItem.userData1) {
            case "order": {
                const b = new RequestUsm();
                b.base = this._base;
                b.where = menuItem.id;
                b.table = "pallet"
                const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
                f.run((data) => {

                    data.map((o) => {

                        menuItem.menuItems.push(o);
                        return false;
                    })
                    menuItem.userData2 = true;
                    barDataTree[0].forceUpdate();


                }, this.fetchError, PalletMediator)
                break
            }
            case "pallet": {
                const b = new RequestUsm();
                b.base = this._base;;
                b.where = menuItem.id;
                b.table = "box"
                const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
                f.run((data) => {

                    data.map((o) => {

                        menuItem.menuItems.push(o);
                        return false;
                    })
                    menuItem.userData2 = true;
                    barDataTree[0].forceUpdate();
                }, this.fetchError, BoxtMediator)
                break
            }
            case "box": {
                const b = new RequestUsm();
                b.base = this._base;;
                b.where = menuItem.id;
                b.table = "block"
                const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
                f.run((data) => {

                    data.map((o) => {
                        menuItem.menuItems.push(o);

                        return false;
                    })
                    menuItem.userData2 = true;
                    barDataTree[0].forceUpdate();
                }, this.fetchError, BlockMediator)
                break
            }
            case "block": {
                const b = new RequestUsm();
                b.base = this._base;;
                b.where = menuItem.id;
                b.table = "pack"
                const f = new FetchServerPost({url: "/api/core/", body: b,menu:menuItem});
                f.run((data) => {

                    data.map((o) => {

                        menuItem.menuItems.push(o);
                        return false;
                    })
                    menuItem.userData2 = true;
                    barDataTree[0].forceUpdate();
                }, this.fetchError, PackMediator)
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
}