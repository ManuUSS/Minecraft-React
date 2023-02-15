import { useEffect, useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useKeyboard } from '../hooks/useKeyboard';

export const Player = () => {

    const actions = useKeyboard();

    const { camera } = useThree();
    const [ ref, api ] = useSphere( () => ({
        mass: 1,
        type: 'Dynamic',
        position: [ 0, 1, 0 ]
    }));

    const position = useRef( api.position );
    useEffect(() => {
      
        api.position.subscribe( positionActual => {
        position.current = positionActual;
      });

    }, [ api.position ]);
    

    const speed = useRef( api.velocity );
    useEffect(() => {
      
        api.position.subscribe( velocityActual => {
        speed.current = velocityActual;
      });

    }, [ api.velocity ]);

    useFrame(() => {
        camera.position.copy(
            new Vector3(
                position.current[0],
                position.current[1],
                position.current[2],
            )
        )
    });

    return (
        <mesh ref={ ref } />

    )
}
