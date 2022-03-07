import React, { useState, useEffect } from 'react'
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PokemonScreen } from './PokemonScreen';
import { useHistory } from 'react-router-dom';

export const DisplayingOptions = () => {

    const { pokemonId } = useParams();
    const history = useHistory();
    const [ pokemonData, setPokemonData ] = useState(undefined);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then( (response) => {
                const {data} = response;
                setPokemonData(data);
            })
            .catch( error => {
                setPokemonData(false) ;
            } )
    }, [pokemonId])
    
    return (
        <>
            {pokemonData === undefined && <CircularProgress/>}
            {pokemonData && <PokemonScreen pokemonData={pokemonData} pokemonId={pokemonId}/>}
            {pokemonData === false && <Typography>Pokemon not found</Typography>}
            {pokemonData !== undefined && ( <Button variant='contained' style={{marginTop: '10px'}} onClick={() => {history.push('/')} }>
                Back to Pokedex
            </Button> )}
        </>
        )
}
