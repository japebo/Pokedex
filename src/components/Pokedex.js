import { AppBar, CircularProgress, Grid, TextField, Toolbar } from '@material-ui/core'
import { makeStyles, alpha } from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react'
import { PokemonCard } from './PokemonCard';
import SearchIcon from "@material-ui/icons/Search";
import axios from 'axios';

const useStyles = makeStyles( (theme) => ({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
    },
    searchContainer: {
        display: 'flex',
        backgroundColor: alpha( theme.palette.common.white, 0.15),
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '25px'
    },
    searchIcon: {
        alignSelf: 'flex-end',
        marginBottom: '5px'
    },
    searchInput: {
        width: '200px',
        margin: '5px'
    }
}));

export const Pokedex = () => {
    
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState({});
    const [ pattern, setPattern ] = useState('');

    const handleInputChange = (e) => {
        setPattern(e.target.value);
    }
  
    useEffect( () => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
            .then( (response) => {
                const {data} = response;
                const {results} = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index+1] = {
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
                }});
                setPokemonData(newPokemonData);
    })}, []);

    return (
        <>
        <AppBar position='static'>
            <Toolbar>
                <div className={classes.searchContainer}>
                    <SearchIcon className={classes.searchIcon}/>
                    <TextField 
                        className={classes.searchInput}
                        onChange={handleInputChange}
                        label='Pokemon'
                        variant='standard'
                    />
                </div>
            </Toolbar>
        </AppBar>
        { pokemonData ? (
            <Grid container spacing={2} className={classes.pokedexContainer}>
                {
                    Object.keys(pokemonData).map((pokemonId) => pokemonData[pokemonId].name.includes(pattern) && <PokemonCard key={pokemonId} pokemonData={pokemonData} pokemonId={pokemonId} />)
                }
            </Grid>
        ) : (
            <CircularProgress />
        )}
        </>
    )
}
