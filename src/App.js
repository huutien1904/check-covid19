import {useEffect,useState} from 'react'
import { getCountry ,getReportByCountry} from './apis'
import CountrySelector from './components/CountrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'
import { sortBy } from 'lodash';
import {Container, Typography} from '@material-ui/core'
import moment from 'moment'
import 'moment/locale/vi'
import '@fontsource/roboto'

moment.locale('vi')
function App() {
  
  const [countries,setCountry] = useState([])
  const [selectedCountryId,setSelectedCountryId] = useState("")
  const [report,setReport] = useState([])
  
  useEffect(() =>{
    return(
      // call API get Country
      getCountry()
      .then(res =>{
        const country = sortBy(res.data,'Country')
        setCountry(country)
        setSelectedCountryId('vn')
      })
      
    )
    
  },[])

  const handleOncChange = (e) =>{
    setSelectedCountryId(e.target.value)
    
    
  }

  useEffect(() => {
    if(selectedCountryId){

      const {Slug} = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId) 
      // call API
        getReportByCountry(Slug)
          .then((res) =>{         
            //  res.data.pop()     
              setReport(res.data)
              
          })
    }
  },[selectedCountryId,countries])
  return (
    
    <Container>
      <Typography variant ="h2" component = "h2">Thống kê Covid-19</Typography>
      <Typography >{moment().format('LLL')}</Typography>
       <CountrySelector countries = {countries} handleOncChange = {handleOncChange} value ={selectedCountryId}></CountrySelector>
       <Highlight report = {report}></Highlight>
       <Summary report = {report} selectedCountryId={selectedCountryId}></Summary>
    </Container>
  );
}

export default App;
