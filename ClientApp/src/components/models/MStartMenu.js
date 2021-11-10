﻿import React from "react";
import {BarData, Head, MenuItem} from "../sidebar/WrapperSideBar";
import { BiHome,BiSearchAlt,BiTask} from "react-icons/bi";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { BsCaretRight,BsCaretDown } from "react-icons/bs";
import {ChecкBoxItemMenu} from "../checkboxbase/CheckBoxBase";


export   const barData=new BarData();
export const sizeRootMenu=30;
export const colorImage="#efec12"
barData.head=new Head("Gjcnj");
{
    const mymenu=new MenuItem();
    mymenu.content=<ChecкBoxItemMenu/>
    mymenu.isShow=true;
    mymenu.href="#";
    mymenu.isSelected=false;
    barData.menuItems.push(mymenu);
}
{
    const mymenu=new MenuItem();
    mymenu.content="Home"
    mymenu.isShow=true;
    mymenu.href="/";
    mymenu.tooltip="Домашняя страница"
    mymenu.imageSrc=<BiHome size={sizeRootMenu}  color={colorImage}/>
    barData.menuItems.push(mymenu);
}

{
    const mymenu=new MenuItem();
    mymenu.content="Поиск по коду"
    mymenu.isShow=true;
    mymenu.href="search";
    mymenu.tooltip="Поиск по фрагменту кода"
    mymenu.imageSrc=<BiSearchAlt size={sizeRootMenu}  color={colorImage}/>
    barData.menuItems.push(mymenu);
}

{
    const mymenu=new MenuItem();
    mymenu.content="Заказы"
    mymenu.isShow=true;
    mymenu.href="orders";
    mymenu.tooltip="Заказы в контексте базы"
    mymenu.imageSrc=<BiTask size={sizeRootMenu}  color={colorImage}/>
    barData.menuItems.push(mymenu);
}

export const imgSize=25;




barData.iconTree=<MdSubdirectoryArrowRight size={imgSize} color={colorImage}/>
barData.iconToggleMenu=<FiAlignJustify size={30} color={colorImage}/>
barData.imageToggleNode1=<BsCaretRight size={20} color={colorImage}/>
barData.imageToggleNode2=<BsCaretDown  size={20} color={colorImage}/>