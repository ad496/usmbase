import React from "react";
import { Form} from "react-bootstrap";

export function ChecкBoxItemMenu(){
    return(
        <Form.Group style={{marginBottom:"30px"}}>
            <Form.Label>База данных</Form.Label>
            <Form.Select size="sm" style={{width:"150px",padding:0}} defaultValue={1}>
                <option value="1">suz</option>
                <option value="2">suz21</option>
                <option value="3">suz22</option> 
            </Form.Select>
        </Form.Group>
       
    );
}