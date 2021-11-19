import uon from "uon"
import {OrdersWorker} from "./OrdersWorker";
import ReactDOM from "react-dom";
import {parserUrl} from "./components/models/ParserUrl";
let curPath=undefined
export class ObserverMenu{
    constructor(root) {
        this._root = root;
        this.init()
    }
    init(){
        
        uon((path)=>{
            curPath=path;
            const p=parserUrl.getObject(path)
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

export function getObjectUrl(){
    return parserUrl(curPath)
}