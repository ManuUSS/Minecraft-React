import { useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';
import { useKeyboard } from '../hooks/useKeyboard';
import * as images from '../images/index';


export const TextureSelect = () => {
    const [ visible, setVisible ] = useState( false );
    const [ texture, setTexture ] = useStore( state => [ state.texture, state.setTexture ]);
    
    const {
        glass,
        grass,
        green,
        log,
        stone
    } = useKeyboard();

    useEffect(() => {
        const options = {
            grass,
            glass, 
            green,
            log, 
            stone
        }

        const selectedTexture = Object.entries( options ).find(([ texture, isEnabled ]) => isEnabled );
        
        if( selectedTexture ){
            const [ textureName ] = selectedTexture;
            setTexture( textureName );
        }
    
    }, [ glass, grass,  green,  log,  stone ])
    
  return null
}
