import React from 'react'
import { useStore } from '../hooks/useStore';
import { Cube } from './Cube';

export const Cubes = () => {
    
    const [ cubes ] = useStore( state => [ state.cubes ]);
  
    return cubes.map( ({ id, position, texture }) => (
        <Cube key={ id } pos={ position } texture={ texture } />
    ))
}
