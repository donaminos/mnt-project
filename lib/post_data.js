//indispensable pour Prismic
const linkResolver = (element, doc) => {
  // Pretty URLs for known types
  // if (doc.type === 'blog') return "/post/" + doc.uid;
  // if (doc.type === 'page') return "/" + doc.uid;
  //
  // // Fallback for other types, in case new custom types get created
  // return "/doc/" + doc.id;
}

const processPostData = (articles) => {
  const postList = articles.map((a) => {
    if ( a !== null ) {
      let body = a.getStructuredText('blog-post.body');
      let article = {
        id: a.id,
        image: body.getFirstImage() ? body.getFirstImage().url : null,
        title: body.getTitle().text,
        author: a.getText('blog-post.author'),
        slug: a.slug,
        body: a.getStructuredText('blog-post.body').asHtml(linkResolver)
      };
      return article
    }
  });
  return postList
}

export default processPostData
