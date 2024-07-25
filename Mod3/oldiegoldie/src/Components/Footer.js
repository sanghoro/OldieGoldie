import "../Styles/Footer.css"
import github from '../Assets/github-Icon.png'
import linkedin from '../Assets/linkedin-icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
    <h2 className='created-by'>Created by:</h2>
    <div className='info-section'>
        <div className='person'>
            <h2 className='name'>Seong Kang</h2>
            <img className='github' src={github} alt='GitHub-logo' />
            <a href='https://github.com/Sanghoro' className='github-link'>@GitHub</a>
            <img className='linkedin' src={linkedin} alt='LinkedIn-Logo' />
            <a href='https://www.linkedin.com/in/seong-kang/' className='linkedin-link'>@LinkedIn</a>
        </div>
    </div>
</footer>
  )
}

export default Footer