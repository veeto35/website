import Social from "../home/Social"

function About() {
    return (
        <div className='intro'>
          <div className='box'>
            Photo
          </div>
          <h1>VASCO POÇAS</h1>
          <h2>Frontend developer</h2>
          <div className='socials'>
            <Social target="https://www.linkedin.com/in/vasco-poças-56322b202/" src="/src/assets/linkedin_logo.png" />
            <Social target="https://github.com/veeto35" src="/src/assets/github_logo.png" />
            <button>Download CV</button>
            <button>Contact me</button>
          </div>
        </div>
    )
}

export default About
