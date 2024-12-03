import Social from "../home/Social"

function About() {
    return (
      <div className="my-9">
        <div className='w-[80%] m-auto mt-14 flex justify-between'>
          <div className="w-[50%]">
          <h1>VASCO POÇAS</h1>
          <h2>Frontend developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime quo modi exercitationem excepturi? Omnis, voluptate! Dolorum eligendi ipsam error laboriosam fuga exercitationem repellendus reprehenderit, vero, nihil quam nemo consequatur!</p>
          <div className='w-[80%] m-auto flex mt-16 gap-3'>
          <Social target="https://www.linkedin.com/in/vasco-poças-56322b202/" src="/src/assets/linkedin_logo.png"  />
          <Social target="https://github.com/veeto35" src="/src/assets/github-mark-white.svg" />
          <a className="relative" href="#">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Download CV</span>
          </a>
          <a href="#" className="relative">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">Contact me</span>
          </a>
        </div>
          </div>
          <div className='mr-44'>
            <img src="../src/assets/vasco.png" alt="me" className="h-[300px] w-[300px] rounded-full" />           
          </div>
        </div>
        
      </div>
    )
}

export default About
