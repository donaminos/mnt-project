import Link from 'next/link';

const SimpleList = (props) => (
  <div style={{marginBottom: 100}}>
  <h2>La même liste en plus basic</h2>
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link prefetch as={`/article/${post.slug}`} href={`/post?slug=${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
  </div>
)
export default SimpleList
