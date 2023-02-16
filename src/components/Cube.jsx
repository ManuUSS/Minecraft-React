import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import * as textures from '../images/textures';

export const Cube = ({ position, texture }) => {
    
    const [ isHovered, setIsHovered] = useState( false );
    const [ ref ] = useBox( () => ({
        type: 'Static',
        position
    }))
    
    const activeTexture = textures[ texture + 'Texture' ];

    return (
        <mesh 
            ref={ ref }
            onPointerMove={ ( e ) => { e.stopPropagation(); setIsHovered( true ) }}
            onPointerOut={ ( e ) => { e.stopPropagation(); setIsHovered( false ) }}
        >
            <boxGeometry attach='geometry' />
            <meshStandardMaterial 
                map={ activeTexture } 
                attach='material' 
                color={ isHovered ? 'grey' : 'white' }
            />
        </mesh>
    )   
}
