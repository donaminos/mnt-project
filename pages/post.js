import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import Prismic  from 'prismic.io';
import _ from 'lodash';
import processPostData from '../lib/post_data';
import renderHTML from 'react-render-html';

const Post = (props) => (
  <Layout>
    <Head>
      <title>{props.post.title}</title>
    </Head>
    <article className="row">
      <div className="panel panel-default col-md-10 col-md-offset-1" style={{marginBottom: '100px'}}>
        <div className="panel-body">
          <span className="lead"> By {props.post.author} </span>
          <hr />
          <div style={{'textAlign': 'justify'}}>
            {renderHTML(props.post.body)}
          </div>
        </div>
        <div className="panel-footer">
          <Link prefetch href="/blog">
            <a>  Retour à la liste</a>
          </Link>
        </div>
      </div>
    </article>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const searchTerm =  context.query.slug;
  const api = await Prismic.api("https://lesbonneschoses-ulzrdknm02iapgl4.prismic.io/api");
  const res = await api.query([
    Prismic.Predicates.at('document.type', 'blog-post'),
    Prismic.Predicates.fulltext('document', searchTerm)
  ]);
  // s'assurer de ne récupérer qu'un seul élement par slug
  const p = _.filter(res.results, function(o) {
    return o.slug === searchTerm
  });

  const posts = processPostData(p);

  return {
    post: posts[0]
  }
}

export default Post;
