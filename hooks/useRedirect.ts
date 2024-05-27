import { useRouter } from "next/router";
import { useEffect } from "react";

const useRedirect = (path = "/") => {
  const route = useRouter();

  useEffect(() => {
    route.pathname === path && route.replace("/cn");
  }, [route, path]);
};

export default useRedirect;
