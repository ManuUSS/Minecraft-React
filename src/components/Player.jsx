import { useEffect, useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useKeyboard } from '../hooks/useKeyboard';

const CHARACTER_SPEED = 5;
const CHARACTER_JUMP  = 3;

export const Player = () => {

    const { 
            moveBackward, 
            moveLeft, 
            moveForward, 
            moveRight, 
            jump 
        } = useKeyboard();

    const { camera } = useThree();
    const [ ref, api ] = useSphere( () => ({
        mass: 1,
        type: 'Dynamic',
        position: [ 0, 1, 0 ]
    }));

    const position = useRef([ 0, 0, 0 ]);

    useEffect(() => {
        api.position.subscribe( positionActual => {
            position.current = positionActual;
        });
    }, [ api.position ]);
    

    const vel = useRef([ 0, 0, 0 ]);
    useEffect(() => {
        api.velocity.subscribe( speedActual => {
            vel.current = speedActual;
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

        const direction = new Vector3();
        const frontVector = new Vector3( 0, 0, ( moveBackward ? 1 : 0 ) - ( moveForward ? 1 : 0 ));
        const sideVector = new Vector3( ( moveLeft ? 1 : 0 ) - ( moveRight ? 1 : 0 ), 0, 0);
        direction.subVectors( frontVector, sideVector )
                  .normalize()
                  .multiplyScalar( CHARACTER_SPEED )
                  .applyEuler( camera.rotation );

        api.velocity.set(
            direction.x,
            vel.current[1],
            direction.z
        );

        if(  jump && Math.abs( vel.current[ 1 ] ) < 0.05 ) {
            api.velocity.set(
                vel.current[0],
                CHARACTER_JUMP,
                vel.current[2]
            )
        }
    });

    return (
        <mesh ref={ ref } />

    )
}
