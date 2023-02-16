import { usePlane }      from '@react-three/cannon';
import { useStore } from '../hooks/useStore';
import { groundTexture } from '../images/textures';

export const Ground = () => {

    const  [ addCube ] = useStore( state => [ state.addCube ] );

    const [ ref ] = usePlane( () => ({
        rotation: [ -Math.PI / 2, 0, 0 ],
        position: [ 0, -0.5, 0 ]
    }))

    groundTexture.repeat.set( 100, 100 );

    const onClickGround = ( event ) => {
        event.stopPropagation();
        if( event.altKey ) return;
        const [ x, y, z ] = Object.values( event.point ).map( p => Math.ceil( p ) );
        addCube( x, y, z );
    }

    return (
        <mesh 
            onClick={ onClickGround }
            ref={ ref }
        >

            <planeGeometry 
                attach='geometry' 
                args={[ 100, 100 ]} 
            />

            <meshStandardMaterial 
                attach='material' 
                color='green'
                map={ groundTexture } 
            />

        </mesh> 
    )
}
