import React from "react";
import { Form} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { generatePath } from "react-router";


export function ComboBoxItemMenu(){
    const history=useHistory();
    function select(as){
        const v=as.target.value//
        const w=history.location.pathname
        const a=w.match('(home|orders|search)');
        if(a){
            history.push(generatePath("/:base/:menu", {
                base: v,
                menu:a[0]
            }))
        }else{
            history.push(generatePath("/:base/:menu", {
                base: v,
                menu:'home'
            }))
        }

       

    }
    return(
        <Form.Group style={{marginBottom:"30px"}} >
            <Form.Label style={{color:"wheat"}}>База данных</Form.Label>
            <Form.Select size="sm" style={{width:"150px",padding:0}} defaultValue={1} onChange={select} id="base-id">
                <option value="1">suz</option>
                <option value="2">suz21</option>
                <option value="3">suz22</option>
            </Form.Select>
        </Form.Group>

    );
}