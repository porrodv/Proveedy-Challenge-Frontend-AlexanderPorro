import '../../css/Navbar.css';

export function Navbar () {
  return (
    <>
      <nav className='navbar'>
        <div className='left'>
          <ul className='navbar-nav'>
            <li className='nav-item'><a href='#'>Features</a></li>
            <li className='nav-item'><a href='#'>For Business</a></li>
            <li className='nav-item'><a href='#'>For Education</a></li>
            <li className='nav-item'><a href='#'>Resources</a></li>
          </ul>
        </div>
        <div className='right'>
          <a id='upgrade' href='#' type='button'> <i className='fa-solid fa-bolt' />Upgrade</a>
          <a id='create' href='#' type='button'><i className='fa-solid fa-plus' />Create Quiz</a>
          <a id='library' href='#'><i className='fa-solid fa-book' />My Library</a>
          <a id='user' href='#'><i className='user-icon fa-solid fa-user' /></a>
        </div>
      </nav>
    </>
  );
}
