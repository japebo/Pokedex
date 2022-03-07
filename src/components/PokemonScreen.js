import React from 'react'
import { Link, Typography } from '@material-ui/core';
import { toFirstCharUppercase } from '../helpers/toFirstCharUppercase';

export const PokemonScreen = ({pokemonData, pokemonId}) => {

    const { species, height, weight, types, sprites } = pokemonData;
    const { name } = species;
    const { front_default } = sprites;
    const { back_default } = sprites;

    return (
    <>
        <Typography variant='h4'> 
            {`${pokemonId}. ${toFirstCharUppercase(name)}`} 
            <img src={back_default} alt='back_default'/>
        </Typography>
        <img src={front_default} alt='front_default' style={{width: '200px', height: '200px'}}/>
        <Typography variant='h5'>Pokemon Info</Typography>
        <Typography variant='h6'>Species: <Link href={species.url}>{species.name}</Link></Typography>
        <Typography variant='h6'>Height: {height}</Typography>
        <Typography variant='h6'>Weight: {weight}</Typography>
        <Typography variant='h5'>Types: {
            types.map( typeInfo => {
                const { type } = typeInfo;
                const { name } = type;
                return <Typography key={name}>{name}</Typography>
            })
        } </Typography>           
    </>
    )
}
