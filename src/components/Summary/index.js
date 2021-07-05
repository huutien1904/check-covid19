import React ,{useEffect,useState} from 'react'
import {Grid} from '@material-ui/core'
import LineChart from '../Charts/LineChart'
import HighMap from './../Charts/HighMap/index'
function Summary({report,selectedCountryId}) {
    const [mapData,setMapData] = useState({})
    useEffect(() =>{
        if(selectedCountryId){
                  
           import(`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`)
            .then((res) => {setMapData(res)})
        }
    },[selectedCountryId])
    return (
        <Grid container spacing = {3}>
            <Grid sm ={8} sx = {12}>
                <LineChart data={report} ></LineChart>
            </Grid>
            <Grid sm ={4} sx = {12}>
                <HighMap mapData={mapData}></HighMap>
            </Grid>
        </Grid>
    )
}

export default Summary