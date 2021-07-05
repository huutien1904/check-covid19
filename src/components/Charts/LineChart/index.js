import React ,{useEffect, useState}from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highchart from 'highcharts'
import moment from 'moment'
import {ButtonGroup,Button} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: '#2196f3',
        },
      },
});

    const generaOption = (data) => {
        const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));
        
        return {
          chart: {
            height: 500,
          },
          title: {
            text: 'Thống kê người mắc covid',
          },
          xAxis: {
            categories: categories,
            crosshair: true,
          },
          colors: ['#F3585B'],
          yAxis: {
            min: 0,
            title: {
              text: null,
            },
            labels: {
              align: 'right',
            },
          },
          tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
              '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0,
            },
          },
          series: [
            {
              name: 'Tổng Ca nhiễm',
              data: data.map((item) => item.Confirmed),
            },
          ],
        };
      };
 function LineChart({data}) {
    const [options,setOption] = useState({})
    const [reportType,setReportType] = useState('')
    // xử lý thay đổi reporttype
    useEffect(() =>{

        let custemData = []

        switch(reportType){
            case 'all':
                custemData = data
                break;
            case '30day':
                custemData = data.slice(data.length - 30);
                break;
            case '7day':
                custemData = data.slice(data.length - 7);
                break;
            default :
             custemData = data
             break;
        }
        setOption(generaOption(custemData))
    },[data,reportType])
    return (    
        <ThemeProvider theme = {theme} >

            <ButtonGroup size ='small' style = {{display:'flex', justifyContent:'flex-end' ,marginTop:'20px'}}>
                <Button color = {reportType === 'all' ? 'secondary' : 'default' } onClick = {() => setReportType('all')}>Tất cả</Button>
                <Button color = {reportType === '30day' ? 'secondary' : 'default' } onClick = {() => setReportType('30day')}>30 ngày</Button>
                <Button color = {reportType === '7day' ? 'secondary' : 'default' } onClick = {() => setReportType('7day')}>7 ngày</Button>
            </ButtonGroup>
            <HighchartsReact
                highchart={Highchart}
                options={options}
            >   
            </HighchartsReact>
        </ThemeProvider>   
        
           
        
    )
}
export default React.memo(LineChart)