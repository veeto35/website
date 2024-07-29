import './homepage.css'
export default function HomePage() {
    return (
        <section className='main'>
        <header className='header'>
          <img src='/src/assets/logo.png' className='logo' />
          <div className='menu'>
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">About me</a>
          </div>
          <div className='socials'>
            <a href="https://www.linkedin.com/in/vasco-poças-56322b202/" target="_blank"><img src="/src/assets/linkedin_logo.png" alt="linkedin" /></a>
            <a href="https://github.com/veeto35" target="_blank"><img src="/src/assets/github_logo.png" alt="github"/></a>
          </div>
        </header>
        <div className='intro'><h1>HELLO, I'M VASCO BUT YOU CAN CALL ME VEETO</h1>
        <h2>I'm a frontend developer</h2>
        </div>
      </section>
    )
}