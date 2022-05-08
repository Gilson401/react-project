import React, { useState } from 'react'
import { Button,  Table, Container  } from 'react-bootstrap';
import { ExcelRenderer } from 'react-excel-renderer';
import styled from 'styled-components';


const Excel = () => {

    const [state, setState] = useState({})
    const hasLine = Object.keys(state).length > 0

 
const send = () => { 
console.log('send')
}

    const fileHandler = (event) => {
        let fileObj = event.target.files[0];

        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            
            if (err) {
                console.log(err);
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
            <br/>
            <input type="file" onChange={fileHandler.bind(this)} style={{ "padding": "10px" }} />

            <hr />
            <br/>
            {hasLine ?
            <>
               

            <Scrolable>
                <Table striped hover>
                    <thead>
                        <tr>
                            <THeadItem>Aluno</THeadItem>
                            <THeadItem>Matrícula</THeadItem>
                            <THeadItem>Ano Letivo</THeadItem>
                            <THeadItem>Turma</THeadItem>
                            <THeadItem>Disciplina</THeadItem>
                            <THeadItem>Bimestre</THeadItem>
                            <THeadItem>Recuperação?</THeadItem>
                            <THeadItem>Nota</THeadItem>                           

                        </tr>
                    </thead>
                    <tbody>


                        {state.rows.map((catg, i) => (
                                                
                            <tr key={i}>
                                <td>{catg[0].toUpperCase()}</td>
                                <td>{catg[1]}</td>
                                <td>{catg[2]}</td>
                                <td>{catg[3]}</td>
                                <td>{catg[4].toUpperCase()}</td>
                                <td>{catg[5]}</td>
                                <td>{catg[6].toUpperCase()}</td>
                                <td>{catg[7]}</td>
                            </tr>
            
                        
                        ))} 

                    </tbody>
                </Table>
            </Scrolable>

                
                
                
                <br/>
                <Button onClick={()=>send} variant="outline-primary">Submeter</Button>
              </>
                : <h4>Clique no botão escolher arquivo para carregar a lista em excel.</h4>}

        <br/>
        <br/>
        
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
    :nth-child(1){  width: 20%; }
    :nth-child(2){  width: 10%; }
    :nth-child(3){  width: 5%; }
    :nth-child(4){  width: 5%; }
    :nth-child(5){  width: 25%; }
    :nth-child(6){  width: 5%; }
    :nth-child(7){  width: 10%; }
    :nth-child(8){  width: 10%; }
    :nth-child(9){  width: 10%; }

`

