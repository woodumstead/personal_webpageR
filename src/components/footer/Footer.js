import './Footer.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <>
        <Container>
          <div class="footer">
            <h4 class="foot-text">
              Made by Woody Umstead: connect via linkedin or github
            </h4>

            <a
              class="fa"
              href="https://www.linkedin.com/in/woody-umstead-5849a21a4/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a class="fa" href="https://github.com/woodumstead">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </Container>
      </>
    );
}