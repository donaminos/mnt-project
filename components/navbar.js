import Link from 'next/link';

const Navbar = () => (

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
          <Link prefetch href="/">
            <a className="navbar-brand">Sadry</a>
          </Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li>
            <Link prefetch href="/">
              <a>Accueil <span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li>
            <Link prefetch as="a-propos-next-js-prismic" href="/about">
              <a>A propos</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>

        <form className="navbar-form navbar-right" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" style={{marginLeft:'5px' }} className="btn btn-primary">Go</button>
        </form>

      </div>
    </div>
  </nav>
)

export default Navbar
