import React from 'react';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense" />
                </Grid>
                {/* <div style={{ marginTop: '15rem' }} /> */}
                <PushToTalkButtonContainer>
                    <PushToTalkButton />
                    <ErrorPanel />
                </PushToTalkButtonContainer>
            </Grid>
        </div>
    )
}

export default App;