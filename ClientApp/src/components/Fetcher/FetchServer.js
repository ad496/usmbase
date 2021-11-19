export default class FetchServerPost{
    
    static map=new Map();
    static getDataHach(json){
        return  FetchServerPost.map.get(json)
    }
    
    _body;
    _fnMediator;
    constructor({url,body,menu}) {
        this._url = url;
        this._body = body;
        this._menuItem = menu;
    } 
    run(fnSuccess,fnError,fnMediator){
        this._fnSuccess=fnSuccess
        this._fnError = fnError;
        this._fnMediator = fnMediator;
        this._innerRun()
    }
    async _innerRun() {
        try{
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this._body)

            };
            this._jsonBody=requestOptions.body;
            const h=FetchServerPost.getDataHach(this._jsonBody)
            if(h){
                
                this._fnSuccess(h)
            }else {
                const response = await fetch(this._url, requestOptions);
                const data = await response.json();
                if(response.ok){
                   
                    const res=this._fnMediator(data,this._menuItem)
                    FetchServerPost.map.set(this._body,res);
                    this._fnSuccess( res);
                }else{
                    this._fnError(data);
                }
            }
        }catch (e){
            this._fnError(e)
        }
       
        
    }
}
 export class RequestUsm{
    constructor() {
        this.base=undefined;
        this.table=undefined;
        this.where=undefined;
        this.searchTree={
            type:undefined,
            str:undefined
        }
    }
    
}
