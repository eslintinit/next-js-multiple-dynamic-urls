import { useEffect } from "react";
import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { article } = router.query;

  useEffect(() => {
    if (process.browser) {
      const articleTitle = window.location.pathname.substring(10); // substring `/article/`
      console.log(articleTitle);
      window.history.replaceState({}, null, `/${articleTitle}`);
    }
  }, [router]);

  return <p>Article: {article}</p>;
};

export default Article;
