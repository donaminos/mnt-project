import Link from 'next/link';

const PostCard = (props) => (
  <div className="col-md-3">
    <div className="thumbnail" style={{height:250}}>
      <div>
        <img alt={`${props.post.title}`} src={props.post.image} style={{ height:150, width: '100%' }} className='img-responsive' />
      </div>
      <div className="caption">
        <Link prefetch as={`/article/${props.post.slug}`} href={`/post?slug=${props.post.slug}`}>
          <a>{props.post.title}</a>
        </Link>
        <p>{props.post.author}</p>
      </div>
    </div>
  </div>
)

export default PostCard;
