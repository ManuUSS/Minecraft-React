import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD = {
    'KeyW'  : 'moveForward',
    'KeyS'  : 'moveBackward',
    'KeyA'  : 'moveLeft',
    'KeyD'  : 'moveRight',
    'Space' : 'jump',
    'Digit1': 'green',
    'Digit2': 'grass',
    'Digit3': 'glass',
    'Digit4': 'log',
    'Digit5': 'stone',
}

export const useKeyboard = () => {
    const [ actions, setAcions ] = useState({
        moveForward : false,
        moveBackward: false,
        moveLeft    : false,
        moveRight   : false,
        jump        : false,
        green       : false,
        grass       : false,
        glass       : false,
        log         : false,
        stone       : false 
    });

    useEffect( () => {

        const handleKeyDown = ( event ) => {
            const { code } = event;
            const actionPlayed = ACTIONS_KEYBOARD[ code ];

            if( actionPlayed ){
                setAcions( prevActions => ({
                    ...prevActions,
                    [ actionPlayed ] : true
                }));
            }
        }
        document.addEventListener( 'keydown', handleKeyDown );
        
        const handleKeyUp = ( event ) => {
            const { code } = event;
            const actionPlayed = ACTIONS_KEYBOARD[ code ];
            
            if( actionPlayed ){
                setAcions( prevActions => ({
                    ...prevActions,
                    [ actionPlayed ] : false
                }));
            }
        }
        document.addEventListener( 'keyup', handleKeyUp );
        

        
        return () => {
            document.removeEventListener( 'keydown', handleKeyDown );
            document.removeEventListener( 'keyup', handleKeyUp );
        }

    }, [])

    return actions;

}

