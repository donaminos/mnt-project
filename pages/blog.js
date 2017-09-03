import Link from 'next/link';
import Layout from '../components/layout';
import Prismic from 'prismic.io';
import SimpleList from '../components/simple_list';
import processPostData from '../lib/post_data';
import PostCard from '../components/post_card';

const Blog = (props) => (
  <Layout>
    <div style={{margin : '50px 0' }}>
      <Link prefetch href='/'>
        <a className='btn btn-default pull-right' >Retour à l'accueil</a>
      </Link>
      <h1>Les bonnes choses</h1>
    </div>

    <div className="row">
      {props.posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>

    <div className="row">
      <div className="col-md-12">
        <SimpleList posts={props.posts} />
      </div>
    </div>
  </Layout>
)

Blog.getInitialProps = async function() {
  const api = await Prismic.api("https://lesbonneschoses-ulzrdknm02iapgl4.prismic.io/api");
  const res = await api.query(Prismic.Predicates.at('document.type', 'blog-post'));
  const posts = processPostData(res.results);

  return {posts: posts}
}

export default Blog;
