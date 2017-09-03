import Layout from '../components/layout';
import Head from 'next/head';
import Prismic  from 'prismic.io';
import processPageData from '../lib/page_data';
import renderHTML from 'react-render-html';

const About = (props) => (
  <Layout>
    <Head>
      <title>{props.article.title}</title>
    </Head>
    <article className="row">
      <div className="panel panel-default col-md-10 col-md-offset-1" style={{marginBottom: '100px'}}>
        <div className="panel-body">
          <h1>{renderHTML(props.article.title)}</h1>
          <hr />
              <div style={{'textAlign': 'justify'}}>
                {renderHTML(props.article.body)}
              </div>
            </div>
            <div className="panel-footer">&nbsp;</div>
          </div>
        </article>
  </Layout>
)

About.getInitialProps = async function(context) {
  const api = await Prismic.api("https://lesbonneschoses-ulzrdknm02iapgl4.prismic.io/api");
  const res = await api.query([
    Prismic.Predicates.at('document.tags', ['next-js','prismic']),
  ]);

  const articles = processPageData(res.results);

  return {
    article: articles[0]
  }
}

export default About
