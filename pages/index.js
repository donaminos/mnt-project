import Link from 'next/link';
import Layout from '../components/layout';

const Index = (props) => (
  <Layout>
    <div className='jumbotron'>
      <h1>Bienvenue à MNT Project</h1>
      <p>Cette application est le résultat des premiers pas avec Next JS et Prismic API.</p>
      <ul className='list-unstyled list-inline' style={{marginTop:'40'}}>
        <li>
          <Link href='/about' >
            <a className='btn btn-primary btn-lg'>Découverte de Next JS</a>
          </Link>
        </li>
        <li>
          <Link href='/blog' >
            <a className='btn btn-primary btn-lg'>Découverte de Prismic</a>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default Index;
