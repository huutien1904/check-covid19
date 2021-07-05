import React from 'react'
import {Grid} from '@material-ui/core'
import HighLightItem from './highLightItem'
function Highlight({report}) {

    const data = report.length ? report[report.length -1] : []
    const sumary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirm'
        },
        {
            title: 'Số ca Khỏi',
            count: data.Recovered,
            type: 'Recovered'
        },
        {
            title: 'Số ca từ vong',
            count: data.Deaths,
            type: 'deaths'
        }

    ]
    return (
        <Grid container spacing={3} style = {{marginBottom:"40px"}}>
            {sumary.map((item) =>{
                return(
                    <HighLightItem title = {item.title} count = {item.count} type = {item.type} key={item.type} ></HighLightItem>
                )
            })}
        </Grid>
    )
}

export default Highlight