import React from 'react'
import {Grid,Card,CardContent,Typography,makeStyles} from '@material-ui/core'
import CountUp from 'react-countup'
const useStyle = makeStyles({
    warpper: (props) =>{
        if(props.type === 'confirm') return { borderLeft :'5px solid #ea0003'}
        if(props.type === 'Recovered') return { borderLeft :'5px solid #0d9a00'}
        if(props.type === 'deaths') return { borderLeft :'5px solid gray'}

    },
    title:{
        fontSize :18,
        marginBottom:5
    },
    count:{
        fontWeight:'bold',
        fontSize:18
    }
})
export default function HighLightItem({title,count,type}) {
    const styles = useStyle({type})
    return (
        <Grid item sm={4} xs={12} >
            <Card className = {styles.warpper}>
                <CardContent>
                    <Typography component='p' variant="body2" className={styles.title}>{title}</Typography>
                    <Typography component='span' className = {styles.count}>
                        {count}
                    </Typography>                      
                </CardContent>
            </Card>
        </Grid>
    )
}
