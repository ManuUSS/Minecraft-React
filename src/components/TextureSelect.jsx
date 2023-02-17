import { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';
import { useKeyboard } from '../hooks/useKeyboard';
import * as images from '../images/index';


export const TextureSelect = () => {
    const [ visible, setVisible ] = useState( true );
    const [ texture, setTexture ] = useStore( state => [ state.texture, state.setTexture ]);
    
    const {
        green,
        grass,
        glass,
        log,
        stone
    } = useKeyboard();

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible( false );
        }, 1200);
        setVisible( true );
        return () => {
            clearTimeout( visibilityTimeout );
        }
    }, [ texture ])

    useEffect(() => {
        const options = {
            green,
            grass,
            glass,
            log,
            stone
        }

        const selectedTexture = Object.entries( options ).find(([ texture, isEnabled ]) => isEnabled );
        
        if( selectedTexture ){
            const [ textureName ] = selectedTexture;
            setTexture( textureName );
        }
    
    }, [ green, grass, glass, log,  stone ])
    
    if( !visible ) return null;

    return (
        <div className='texture-selector'>
            {
                Object.entries( images ).map(([ imgtextureName, imgTexture ]) => {
                    return (
                        <img
                            className={ texture === imgtextureName.replace('Img', '') ? 'selected' : ''}
                            key={ imgtextureName }
                            src={ imgTexture }
                            alt={ `${imgtextureName}, ${ texture }` }
                        />
                    )
                })
            }
        </div>
    )
}
