import { useEffect, useState } from 'react'

// Custom hooks 
// A function returnng some valeu & function whcih is in array 
// standard approach -- hooks starts with use so we can name it with it -



function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}


// Since other hooks -- return the data & the method ---- 
// heere we return teh dtaa fro teh function 
// the complete method is exported (export default ....)
// & the data variable is accessed from that onlyyyy 

export default useCurrencyInfo;