const All = () => null;

All.getInitialProps = ({ res, query }) => {
  if (query.slug.startsWith("@")) {
    res.writeHead(302, { Location: `/users/${query.slug}` });
  } else {
    res.writeHead(302, { Location: `/articles/${query.slug}` });
  }
  res.end();
};

export default All;
