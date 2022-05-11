import React, { useState } from 'react'
import { Button, Table, Container } from 'react-bootstrap';
import { ExcelRenderer } from 'react-excel-renderer';
import styled from 'styled-components';


const Excel = () => {

    const [state, setState] = useState({ rows: [[]]})
    const hasLine = () =>  state.rows[0].length 


    const send = () => {

        if (hasLine()){
            alert('Os dados foram submetidos!')
        }else{
            alert('Necessário carregar itens submetidos!')
        }
    }

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];

        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                alert(`Não foi possível carragar o arquivo! ${err}`)
            }
            else {
                resp.rows.splice(0, 1)
                setState({
                    rows: resp.rows
                });

            }
        });
    }




    return (

        <StContainer>
<div className='d-flex align-items-center justify-content-between w-100 mt-3'>

            <input type="file" onChange={fileHandler.bind(this)}  accept=".xls,.xlsx" />

            <Button disabled={!state.rows[0].length} onClick={send} variant="outline-primary">Submeter</Button>
</div>

            {hasLine ?
                <>
                    <Scrolable>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    {state.rows[0].map((catg, i) => (
                                        <THeadItem key={i}> {catg} </THeadItem>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {state.rows.map((catg, i) => (
                                    <tr key={i}>
                                        {catg.map((key, index) => (<td key={index} > {key} </td>))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Scrolable>
                    
                </>
                : <h4>Clique no botão escolher arquivo para carregar a lista em excel.</h4>}
        </StContainer>
    )
}

export default Excel

const StContainer = styled(Container)`


min-height: 70vh;

.ExcelTable2007 {
	border: 1px solid #B0CBEF;
	border-width: 1px 0px 0px 1px;
	font-size: 11pt;
	font-family: Calibri;
	font-weight: 100;
	border-spacing: 0px;
	border-collapse: collapse;
	padding: 10px;
}

.ExcelTable2007 TH {
	background-image: url(https://raw.githubusercontent.com/ashishd751/excel-renderer-demo/master/src/excel-2007-header-bg.gif);
	background-repeat: repeat-x; 
	font-weight: bold;
	font-size: 14px;
	border: 1px solid #9EB6CE;
	border-width: 0px 1px 1px 0px;
	height: 17px;
	line-height: 17px;
}



.ExcelTable2007 TD {
	border: 0px;
	background-color: white;
	padding: 0px 4px 0px 2px;
	border: 1px solid #D0D7E5;
	border-width: 0px 1px 1px 0px;
}

.ExcelTable2007 TD B {
	border: 0px;
	background-color: white;
	font-weight: bold;
}

.ExcelTable2007 TD.heading {
	background-color: #E4ECF7;
	text-align: center;
	border: 1px solid #9EB6CE;
	border-width: 0px 1px 1px 0px;
	font-weight: bold;
}

.ExcelTable2007 TH.heading {
	background-image: url(raw.githubusercontent.com/ashishd751/excel-renderer-demo/master/src/excel-2007-header-left.gif);
	background-color:blue;
    background-repeat: none;
}

TH {
	text-align: center;
}

.restrict-card {
	height: 175px;
	overflow-y: overlay;
}

`


const Scrolable = styled.div`                    
    min-width: 100%;
    height: auto;
    overflow-x: auto;
    overflow-y: auto;    
    padding: 1px;
    table{
        tbody{
            tr{
                td{
                    text-align:center;
                }
            }
        }
    }
`
const THeadItem = styled.th`
    background: #666;
    color:#eee;
    text-align:center;   
`

