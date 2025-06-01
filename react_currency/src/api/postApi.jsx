import axios from "axios";

const api=axios.create({
    baseURL:"https://v6.exchangerate-api.com/v6/33664473fbb6a16217700568/latest/USD",
})

//we need to create a get request

export const currencyConverter=(fromCurrency,toCurrency,amount)=>{
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};