import { useEffect } from "react";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { user } = router.query;

  useEffect(() => {
    if (process.browser) {
      const nickname = window.location.pathname.substring(7); // substring `/users/`
      window.history.replaceState({}, null, `/${nickname}`);
    }
  }, [router]);

  return <p>User: {user}</p>;
};

export default User;
