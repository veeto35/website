import About from './about/About'
import Experience from './Experience/Experience'
import HomePage from './home/HomePage'
import Skills from './skills/Skills'
function App() {
 

  return (
      
      <div className='w-full m-auto h-screen text-white'>
        <HomePage />
        <section>
        <About />
      </section>
      <h1 className='w-[80%] m-auto text-4xl'>SKILLS</h1>
      <section className='h-[90px] w-[80%] m-auto overflow-hidden' style={{maskImage: "linear-gradient(to right,transparent,#000,transparent)"}}>
        <div className='flex w-full relative group top-2' style={{"--quantity": 9}}>
        <Skills img="../src/assets/react.svg" position={1} width="70px" height="70px"/>
        <Skills img="../src/assets/javascript.svg" position={2} width="70px" height="70px"/>
        <Skills img="../src/assets/git.svg" position={3} width="70px" height="70px"/>
        <Skills img="../src/assets/node.svg" position={4} width="70px" height="70px"/>
        <Skills img="../src/assets/tailwind.svg" position={5} width="70px" height="70px"/>
        <Skills img="../src/assets/css.svg" position={6} width="70px" height="70px"/>
        <Skills img="../src/assets/html.svg" position={7} width="70px" height="70px"/>
        <Skills img="../src/assets/psql.svg" position={8} width="70px" height="70px"/>
        <Skills img="../src/assets/redux.svg" position={9} width="70px" height="70px"/>
        </div>
      </section>
      <section>
        <Experience />
      </section>
      </div>
    
  )
}

export default App
