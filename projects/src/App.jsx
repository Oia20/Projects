import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThreeBackdrop from './Backdrop.jsx'
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

function ThreeBackdrop() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1}} camera={{ fov: 90, position: [0, 0, 0] }}>
        <Sparkles scale={10} color={"#be8ebb"} size={25} count={250} speed={.25}/>
    </Canvas>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThreeBackdrop />

      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
