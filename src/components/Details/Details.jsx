import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useTransactions from '../../useTransactions';
import useStyles from './styles';

const Details = ({ title }) => {

    const classes = useStyles();
    const { total, chartData } = useTransactions(title);
    console.log(total)
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense} sx={{ minWidth: 275 }} >
            <CardHeader title={title}></CardHeader>
            <CardContent>
                <Typography variant="h5">{`\u20b9 ${total}`}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}


export default Details;
