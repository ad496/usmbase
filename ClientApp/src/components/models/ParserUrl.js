/**
 * Распарсивание строки запроса в объект ( ордер, палетта, короб ,блок)
 */
class ParserUrl{
    
    getObject(url){
        if(!url){
            return undefined
        }
        const f=url.split('/')
        const o=new OrderUrl();
        f.map((s,i)=>{
            switch (i){
                case 1:{
                    o.base=s;
                    break
                }
                case 2:{
                    o.ordername=s;
                    break
                }
                case 3:{
                    o.order=s;
                    break
                }
                case 4:{
                    o.pallet=s;
                    break
                }
                case 5:{
                    o.box=s;
                    break
                }
                case 6:{
                    o.block=s;
                    break
                }
                case 7:{
                    o.pack=s;
                    break
                }
            }
        });
        return o;
    }
}
class OrderUrl{
    constructor() {
        this.base=undefined;
        this.ordername=undefined;
        this.order=undefined;
        this.pallet=undefined;
        this.box=undefined;
        this.block=undefined;
        this.pack=undefined;
    }
}
export const parserUrl=new ParserUrl();