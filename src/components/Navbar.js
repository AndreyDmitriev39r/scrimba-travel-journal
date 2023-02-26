import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <nav>
      <FontAwesomeIcon icon={faGlobe} />
      <p>my travel journal.</p>
    </nav>
  );
}

export default Navbar;