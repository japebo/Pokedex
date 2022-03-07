import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { toFirstCharUppercase } from '../helpers/toFirstCharUppercase';


const useStyles = makeStyles({
    CardMedia: {
        margin: 'auto',
        width: '130px',
        height: '130px'
    },
    CardContent: {
        textAlign: 'center'
    }
});

export const PokemonCard = ({pokemonData, pokemonId}) => {

    const history = useHistory();
    const classes = useStyles();

    const { name, sprite } = pokemonData[pokemonId];

    return (
        <Grid item xs={12} sm={4} key={pokemonId}>
            <Card onClick={ () => {history.push(`/${pokemonId}`)}}>
                <CardMedia 
                    className={classes.CardMedia}
                    image={sprite}
                />
                <CardContent className={classes.CardContent}>
                    <Typography> { `${pokemonId}. ${toFirstCharUppercase(name)}` } </Typography>
                </CardContent>
            </Card>
        </Grid>
    )   
}