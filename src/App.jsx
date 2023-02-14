import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';

function App() {
  
  return (
    <Canvas>
      <Sky 
        sunPosition={[ 100, 100, 200 ]}
        distance={ 50 }
      />
      <ambientLight intensity={ 0.5 } />
    </Canvas>
  )
}

export default App
