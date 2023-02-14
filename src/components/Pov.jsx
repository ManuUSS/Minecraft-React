import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Pov = () => {

    const { camera, gl } = useThree();

    return (
        <PointerLockControls camera={ camera } args={[ gl.domElement ]} />
    )
}
