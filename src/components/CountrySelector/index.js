/* eslint-disable no-labels */
import React from 'react'
import {FormControl,InputLabel,NativeSelect,FormHelperText, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    formControl:{
        margin : "20px 0"
    }
}))
function CountrySelector({value,handleOncChange,countries}) {
    const renderCountries = (countries) =>{
        return(
            countries.map((country,index) =>{
                return <option value = {country.ISO2.toLowerCase()} key = {index}>{country.Country}</option>
            })
        )
        
    } 
    const styles = useStyles()
    return (
        <FormControl className = {styles.formControl}>
            <InputLabel htmlFor="country-selector" shrink>
                Quốc gia   
            </InputLabel>
            <NativeSelect
                value = {value}
                onChange = {handleOncChange}
                inputProps = {{
                        name:"country",
                        id:"country-selector"
                    }
                }
            >
                {renderCountries(countries)}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}

export default CountrySelector