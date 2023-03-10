import { nanoid } from "nanoid";
import { create } from "zustand";


export const useStore = create( set => ({
    texture     : 'stone',
    cubes       : [
        {
            id      : nanoid(),
            position: [ 1, 1, 1 ],
            texture : 'glass' 
        }
    ],
    addCube     : ( x, y, z ) => {
        set( state => ({
            cubes: [ ...state.cubes, {
                id: nanoid(),
                position: [ x, y, z ],
                texture: state.texture
            }],
        }));
        
    },
    removeCube  : ( id ) => {
        set( state => ({
            cubes: state.cubes.filter( cube => cube.id !== id )
        }) )
    },
    setTexture  : ( texture ) => {
        set(() => ({ texture }))
    },
    saveWorld   : () => {},
    resetWorld  : () => {},
}));