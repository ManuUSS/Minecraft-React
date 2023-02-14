import { Canvas  } from '@react-three/fiber';
import { Sky     } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Pov } from './components/Pov';

function App() {
  
  return (
    <Canvas>
      <Sky 
        sunPosition={[ 100, 100, 200 ]}
        distance={ 50 }
      />
      <ambientLight intensity={ 0.5 } />
      <Pov />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  )
}

export default App
