import {BarData, MenuItem} from "../sidebar/WrapperSideBar";
import {MdSubdirectoryArrowRight} from "react-icons/md";
import {FiAlignJustify} from "react-icons/fi";
import {BsCaretDown, BsCaretRight} from "react-icons/bs";
import React from "react";
import {colorImage, imgSize} from "../models/MOrederTree";
import { generatePath } from "react-router";
import {parserUrl} from "../models/ParserUrl";


function getPath(menuItem) {

}


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

export function OrderMediator(data, menu) {

    function span(o){
        return(
            <div style={{display:"block"}}>
                <span style={{fontSize:"10px"}}>{o.dateTimeToString+" "}</span>
                <span style={{fontWeight:500}}>{o.ordNom+" "}</span>
                    <span>{o.firstName}</span>
                <span style={{fontWeight:500}}>{o.ordText}</span>
                <span>{o.lastName}</span>
                
            </div>
        );
    }
    const barDataTree = new BarData();
    barDataTree.iconTree = <MdSubdirectoryArrowRight size={imgSize} color={colorImage}/>
    barDataTree.iconToggleMenu = <FiAlignJustify size={30} color={colorImage}/>
    barDataTree.imageToggleNode1 = <BsCaretRight size={20} color={colorImage}/>
    barDataTree.imageToggleNode2 = <BsCaretDown size={20} color={colorImage}/>
    data.map((o, i) => {
        const mymenu = new MenuItem();
        mymenu.content =span(o)
        mymenu.isShow = true;
        mymenu.id = o.orderKey;
        mymenu.href =(l)=>{
            const os=parserUrl.getObject(l.pathname);  
            if(os.order===undefined){
                return l.pathname+"/"+o.orderKey 
            }else{
               
                    return {
                        pathname: `/${os.base}/orders/${o.orderKey}`,
                    }
               
            }
        } ;
        mymenu.imageSrc = "./box_close.png"
        mymenu.imageSrcOpen = "./box_open.png"
        mymenu.userData = o;
        mymenu.userData1 = "order"
        mymenu.userData2 = menu;
        barDataTree.menuItems.push(mymenu);
        mymenu.userData3="pallet"
        return false;

    })
    return barDataTree;

}

export function PalletMediator(data, menu) {

    // dateTime: "2021-03-22T22:52:33.126"
    // dateTimeToString: "22.03.2021 22:52"
    // id: "da76a45c-351a-4a11-989b-ccb5d0407586"
    // km: "00009996660005001641"
    // numberItem: 1
    // orderKey: "2f1758e9-dfb7-4f1e-a3f9-6e664e496c68"

    function span(o){
        return(
            <div style={{display:"block"}}>
                
                <span style={{fontWeight:"bold"}}>{`№: ${o.numberItem} `}</span>
                <span>{o.km}</span>
                

            </div>
        );
    }

    const list = []
    data.map((o, i) => {

        const mymenu = new MenuItem();
        mymenu.content = span(o)
        mymenu.isShow = true;
        mymenu.id = o.id;
        mymenu.href =(l)=>{
            const os=parserUrl.getObject(l.pathname);
            if(os.pallet===undefined){
                return l.pathname+"/"+o.id
            }else{
                return {
                    pathname: `/${os.base}/orders/${o.orderKey}/${o.id}`,
                }
            }
        } ;
        mymenu.imageSrc = "./pallet.png"
        mymenu.userData = o;
        mymenu.userData1 = "pallet"
        mymenu.userData2 = menu;
        mymenu.userData3="box"
        list.push(mymenu);
        return false;
    })

    return list;

}

export function BoxtMediator(data, menu) {

    // dateTime: "2021-03-10T14:39:36.11"
    // dateTimeToString: "10.03.2021 14:39"
    // id: "ed5ee907-0b86-4f9e-b7fd-aba2b088b815"
    // idPallet: "d15c7b08-78c7-417a-b3ba-0a984616871e"
    // km: "011461003014237821cbQj76u\u001d8005000000\u001d3766"
    // numberItem: 1
    // orderKey: "e75da851-603b-42d0-b7b5-57ba628b7cf2"

    function span(o){
        return(
            <div style={{display:"block"}}>
                <span style={{fontWeight:"bold"}}>{`№: ${o.numberItem} `}</span>
                <span>{o.km}</span>
            </div>
        );
    }
    const list = []
    data.map((o) => {

        const mymenu = new MenuItem();
        mymenu.content = span(o)
        mymenu.isShow = true;
        mymenu.id = o.id;
        mymenu.href =(l)=>{
            const os=parserUrl.getObject(l.pathname);
            if(os.box===undefined){
                return l.pathname+"/"+o.id
            }else{
                return {
                    pathname: `/${os.base}/orders/${os.order}/${os.pallet}/${o.id}`,
                }
            }
        } ;
        mymenu.imageSrc = "./box.png"
        mymenu.userData = o;
        mymenu.userData1 = "box"
        mymenu.userData2 = menu;
        mymenu.userData3="block"
        list.push(mymenu);

        return false
    })

    return list;

}

export function BlockMediator(data, menu) {

    // dateTime: "2021-03-10T14:39:36.11"
    // dateTimeToString: "10.03.2021 14:39"
    // id: "ed5ee907-0b86-4f9e-b7fd-aba2b088b815"
    // idPallet: "d15c7b08-78c7-417a-b3ba-0a984616871e"
    // km: "011461003014237821cbQj76u\u001d8005000000\u001d3766"
    // numberItem: 1
    // orderKey: "e75da851-603b-42d0-b7b5-57ba628b7cf2"


    const list = []
    data.map((o, i) => {


        const mymenu = new MenuItem();
        mymenu.content = o.km
        mymenu.isShow = true;
        mymenu.id = o.id;
        mymenu.href =(l)=>{
            const os=parserUrl.getObject(l.pathname);
            if(os.block===undefined){
                return l.pathname+"/"+o.id
            }else{
                return {
                    pathname: `/${os.base}/orders/${os.order}/${os.pallet}/${os.box}/${o.id}`,
                }
            }
        } ;
        mymenu.imageSrc = "./block.png"
        mymenu.userData = o;
        mymenu.userData1 = "block"
        mymenu.userData3="pack"
        mymenu.userData2 = menu;
        list.push(mymenu);
        return false;

    })

    return list;

}


export function PackMediator(data, menu) {

    // dateTime: "2021-03-10T14:39:36.11"
    // dateTimeToString: "10.03.2021 14:39"
    // id: "ed5ee907-0b86-4f9e-b7fd-aba2b088b815"
    // idPallet: "d15c7b08-78c7-417a-b3ba-0a984616871e"
    // km: "011461003014237821cbQj76u\u001d8005000000\u001d3766"
    // numberItem: 1
    // orderKey: "e75da851-603b-42d0-b7b5-57ba628b7cf2"


    const list = []
    data.map((o, i) => {

        const mymenu = new MenuItem();
        mymenu.content = o.km
        mymenu.isShow = true;
        mymenu.id = o.id;
        mymenu.href =(l)=>{
            const os=parserUrl.getObject(l.pathname);
            if(os.pack===undefined){
                return l.pathname+"/"+o.id
            }else{
                return {
                    pathname: `/${os.base}/orders/${os.order}/${os.pallet}/${os.box}/${os.block}/${o.id}`,
                }
            }
        } ;
        mymenu.imageSrc = "./pack.png"
        mymenu.userData = o;
        mymenu.userData1 = "pack"
        mymenu.userData2 = menu;
        list.push(mymenu);
        return false;

    })

    return list;

}

// userData- объект меню.
// userData1- тип меню.
// userData2 -ссылка на родителя.
