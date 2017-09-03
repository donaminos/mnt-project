//indispensable pour Prismic
const linkResolver = (element, doc) => {
  // Pretty URLs for known types
  // if (doc.type === 'blog') return "/post/" + doc.uid;
  // if (doc.type === 'page') return "/" + doc.uid;
  //
  // // Fallback for other types, in case new custom types get created
  // return "/doc/" + doc.id;
}

const processPageData = (pages) => {
  const pagesList = pages.map((p) => {
      let body = p.getStructuredText('article.content');
      let page = {
        id: p.id,
        title: p.getStructuredText('article.title').asText(),
        body: body.asHtml(linkResolver)
      };
      return page
  });
  return pagesList
}

export default processPageData
