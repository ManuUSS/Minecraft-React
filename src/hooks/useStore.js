import { nanoid } from "nanoid";
import { create } from "zustand";


export const useStore = create( set => ({
    texture     : 'stone',
    cubes       : [
        {
            id      : nanoid(),
            position: [ 1, 1, 1 ],
            texture : 'stone' 
        }
    ],
    addCube     : () => {},
    removeCube  : () => {},
    setTexture  : () => {},
    saveWorld   : () => {},
    resetWorld  : () => {},
}));