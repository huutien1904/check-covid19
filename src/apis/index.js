import axios from "axios";

export const getCountry = () =>{
    return(
        axios.get('https://api.covid19api.com/countries')
    )       
}

export const getReportByCountry = (country) =>{
    return (
        axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
    )
}