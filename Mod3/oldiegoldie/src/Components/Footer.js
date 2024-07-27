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
            <a href='https://github.com/Sanghoro' className='github-link'>
              <img className='github' src={github} alt='GitHub-logo' />
            </a>
            <a href='https://www.linkedin.com/in/seong-kang/' className='linkedin-link'>
              <img className='linkedin' src={linkedin} alt='LinkedIn-Logo' />
            </a>
        </div>
    </div>
</footer>
  )
}

export default Footer