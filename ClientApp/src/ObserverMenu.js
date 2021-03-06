import uon from "uon"
import {OrdersWorker} from "./OrdersWorker";
import ReactDOM from "react-dom";
import {parserUrl} from "./components/models/ParserUrl";

export class ObserverMenu{
    constructor(root) {
        this._root = root;
        this.init()
        this.curPath=undefined
    }
    getObUrl(){
        return parserUrl.getObject(this.curPath)
    }
    init(){
        
        uon((path)=>{
            this.curPath=path;
          
           // console.log(p)
            {
                const d= path.match("(\\/\\d\\/home)$")
                if(d){
                    ReactDOM.unmountComponentAtNode(document.getElementById(this._root))
                   
                }
            }
            {
                const d= path.match("(\\/\\d\\/search)$")
                if(d){
                    ReactDOM.unmountComponentAtNode(document.getElementById(this._root))
                   
                }
            }
            {
                const d= path.match("(\\/\\d\\/orders)$")
                if(d){
                    ReactDOM.unmountComponentAtNode(document.getElementById(this._root))
                    const  b=d[0].match('(\\d)')
                  
                    new OrdersWorker(this._root,b[0])
                }
            }
          
        })
    }
}

export const observer=new ObserverMenu('root2')