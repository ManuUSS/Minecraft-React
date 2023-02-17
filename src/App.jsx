import { Canvas  } from '@react-three/fiber';
import { Sky     } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Pov } from './components/Pov';
import { Player } from './components/Player';
import { Cubes } from './components/Cubes';
import { TextureSelect } from './components/TextureSelect';

function App() {
  
  return (
    <>
      <Canvas>
        <Sky 
          sunPosition={[ 100, 100, 100 ]}
          distance={ 50 }
        />
        <ambientLight intensity={ 0.8 } />
        <Pov />
        <TextureSelect />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
    </>
  )
}

export default App
