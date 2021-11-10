import React from "react";
import {BarData, Head, MenuItem} from "../sidebar/WrapperSideBar";
import { BiHome,BiSearchAlt,BiTask} from "react-icons/bi";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { BsCaretRight,BsCaretDown } from "react-icons/bs";
import { BiFolder,BiFolderOpen} from "react-icons/bi";
import {ChecкBoxItemMenu} from "../checkboxbase/CheckBoxBase";

export   const barDataTree=new BarData();
export const sizeRootMenu=30;
export const colorImage="rgba(231,178,49,0.91)"
export const imgSize=25;




barDataTree.iconTree=<MdSubdirectoryArrowRight size={imgSize} color={colorImage}/>
barDataTree.iconToggleMenu=<FiAlignJustify size={30} color={colorImage}/>
barDataTree.imageToggleNode1=<BsCaretRight size={20} color={colorImage}/>
barDataTree.imageToggleNode2=<BsCaretDown size={20} color={colorImage}/>


{
    const mymenu=new MenuItem();
    mymenu.content="Home"
    mymenu.isShow=true;
    mymenu.href="/";
    mymenu.imageSrc=<BiFolder size={sizeRootMenu}  color={colorImage}/>
    mymenu.imageSrcOpen=<BiFolderOpen size={sizeRootMenu}  color={colorImage} />
    barDataTree.menuItems.push(mymenu);
}

{
    const mymenu=new MenuItem();
    mymenu.content="Поиск по коду"
    mymenu.isShow=true;
    mymenu.href="search";
    mymenu.imageSrc=<BiFolder size={sizeRootMenu}  color={colorImage}/>
    mymenu.imageSrcOpen=<BiFolderOpen size={sizeRootMenu}  color={colorImage} />
    barDataTree.menuItems.push(mymenu);
}

{
    const mymenu=new MenuItem();
    mymenu.content="Заказы"
    mymenu.isShow=true;
    mymenu.href="orders";
    mymenu.imageSrc=<BiFolder size={sizeRootMenu}  color={colorImage}/>
    mymenu.imageSrcOpen=<BiFolderOpen size={sizeRootMenu}  color={colorImage} />
    barDataTree.menuItems.push(mymenu);
}

