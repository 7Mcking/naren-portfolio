import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { ScrollContainer } from './components/ScrollContainer';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <main className="relative w-screen bg-black">
      <div className="fixed inset-0">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <Navbar />
      <ScrollContainer />
    </main>
  );
}