import * as React from 'react';
import {Container, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    titles: {
        color: '#999999'
    }
});

type PageProps = {
    title: string
};

export const Page: React.FC<PageProps> = (props) => {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.titles} component="h1" variant="h5">
                {props.title}
            </Typography>
        </Container>
    );
};
