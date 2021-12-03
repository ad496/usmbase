import BaseDialog from "modaldialogion/dist/BaseDialog";
import Form from 'react-bootstrap/Form'
import React from 'react';
import {Col, Row} from "react-bootstrap";
import {DialogAlert} from "modaldialogion";
import "modaldialogion/dist/styleDialog.css"

export class SearchDialog extends BaseDialog{
    constructor() {
        super();
        this.refPallet=React.createRef()
        this.refBox=React.createRef()
        this.refBlock=React.createRef()
        this.refPack=React.createRef()
        this.res=0;
    }
    
    validate() {
        if(this.refPallet.current.checked){
            this.res=1;
            return true;
        }
        if(this.refBox.current.checked){
            this.res=2;
            return true;
        }
        if(this.refBlock.current.checked){
            this.res=3;
            return true;
        }
        if(this.refPack.current.checked){
            this.res=4;
            return true;
        }
        DialogAlert({head:"Выбор предмета поиска",body:"Ничего не выбрано"})
       
        return false;
    }
    getData() {
        return { result:this.res}
    }
    render() {
        return(
            <Form.Group as={Row} className="">
               
                <Col >
                    <Form.Check
                        ref={this.refPallet}
                        type="radio"
                        label="Паллета"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        ref={this.refBox}
                        type="radio"
                        label="Короб"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        ref={this.refBlock}
                        type="radio"
                        label="Блок"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        ref={this.refPack}
                        type="radio"
                        label="Пачка"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                </Col>
            </Form.Group>
        );
    }
}