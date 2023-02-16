import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import { useStore } from '../hooks/useStore';
import * as textures from '../images/textures';

export const Cube = ({ position, texture }) => {
    
    const [ isHovered, setIsHovered] = useState( false );
    const [ ref ] = useBox( () => ({
        type: 'Static',
        position
    }))
    const [ removeCube ] = useStore( state => [ state.removeCube ] )

    const activeTexture = textures[ texture + 'Texture' ];
    
    
    const onHoverCube = ( event ) => {
        event.stopPropagation(); 
        setIsHovered( true );
    }
    
    const onHoverOutCube = ( event ) => {
        event.stopPropagation(); 
        setIsHovered( false );
    }

    const onRemoveCube = ( event ) => {
        if( event.altKey ) {
            const { x, y, z } = ref.current.position;
            removeCube( x, y, z );
        }
    }


    return (
        <mesh 
            ref={ ref }
            onPointerMove={ onHoverCube }
            onPointerOut={ onHoverOutCube }
            onClick={ onRemoveCube }
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
