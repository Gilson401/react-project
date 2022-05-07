 const optTipo = (ticker) => {

    const calls = "ABCDEFGHIJKl"
    const puts = 'MNOPQRSTUVWX'

    if(!ticker){
        return "NA#"
    }

    if (calls.includes(ticker.charAt(4))) {
        return "CALL"
    } else if (puts.includes(ticker.charAt(4))) {
        return "PUT"
    } else {
        return "NA#"
    }
}

export default optTipo