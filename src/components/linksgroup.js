import React from 'react'
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap'
import history from '../config/history';
import { adicionaLST } from '../util/localsthandler';

const defaulte = {

}

const LinksGroup = (props) => {
    return (
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="secondary" id="dropdown-split-basic" />

            <Dropdown.Menu onClick={()=>adicionaLST(props.ticker.TICKER)}>
                {props.ticker.TICKER ? <>

                    <Dropdown.Item>
                        <Button onClick={() => history.push(`trade/${props.ticker.TICKER}`)} variant="link" >   Scan   </Button>
                    </Dropdown.Item>

                    <Dropdown.Item
                        target="_blank" rel="noopener noreferrer"
                        href={`https://www.fundamentus.com.br/detalhes.php?papel=${props.ticker.TICKER}`}>Fundamentus</Dropdown.Item>

                    <Dropdown.Item
                        target="_blank" rel="noopener noreferrer"
                        href={`https://www.tradingview.com/symbols/BMFBOVESPA-${props.ticker.TICKER}/technicals/`}>Trading View</Dropdown.Item>

                    <Dropdown.Item
                        target="_blank" rel="noopener noreferrer"
                        href={`https://br.tradingview.com/chart/?symbol=BMFBOVESPA%3A${props.ticker.TICKER}`}>GraficoTRV</Dropdown.Item>

                    <Dropdown.Item
                        target="_blank" rel="noopener noreferrer"
                        href={`https://twitter.com/search?q=%23${props.ticker.TICKER}&src=typed_query&f=live`}>Twitter</Dropdown.Item>

                    <Dropdown.Item
                        target="_blank" rel="noopener noreferrer"
                        href={`https://statusinvest.com.br/acoes/${props.ticker.TICKER}`}>Status Invest</Dropdown.Item>

                <Dropdown.Item
                    target="_blank" rel="noopener noreferrer"
                    href={`https://opcoes.net.br/opcoes/bovespa/${props.ticker.TICKER}`}>Opções Net</Dropdown.Item>



                </>
                    : ""}

                <Dropdown.Item
                    target="_blank" rel="noopener noreferrer"
                    href={`https://opcoes.net.br/calculadora-Black-Scholes/${props.ticker.optTicker}`}> Black Scholes </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>


    )
}


export default LinksGroup
