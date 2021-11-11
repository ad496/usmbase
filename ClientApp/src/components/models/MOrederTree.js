import React from "react";
import {BarData} from "../sidebar/WrapperSideBar";

import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { BsCaretRight,BsCaretDown } from "react-icons/bs";


export   const barDataTree=new BarData();
export const sizeRootMenu=30;
export const colorImage="rgba(231,178,49,0.91)"
export const imgSize=25;




barDataTree.iconTree=<MdSubdirectoryArrowRight size={imgSize} color={colorImage}/>
barDataTree.iconToggleMenu=<FiAlignJustify size={30} color={colorImage}/>
barDataTree.imageToggleNode1=<BsCaretRight size={20} color={colorImage}/>
barDataTree.imageToggleNode2=<BsCaretDown size={20} color={colorImage}/>



