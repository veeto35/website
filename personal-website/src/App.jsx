import About from './about/About'
import HomePage from './home/HomePage'
import Skills from './skills/Skills'
function App() {
 

  return (
    
      < >
      <div className='noise'></div>
        <HomePage />
        <section>
        <About />
      </section>
      <section className=' border border-red-700 h-[120px] overflow-hidden'>
        <div className='flex w-full relative group top-2' style={{"--quantity": 17}}>
        <Skills img="../src/assets/logo_dark.svg" position={1} width="120px" height="120px"/>
        <Skills img="../src/assets/react.svg" position={2} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={3} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={4} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={5} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={6} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={7} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={8} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={9} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={10} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={11} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={12} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={13} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={14} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={15} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={16} width="120px" height="120px"/>
        <Skills img="../src/assets/logo.png" position={17} width="120px" height="120px"/>
        </div>
      </section>
      </>
    
  )
}

export default App
