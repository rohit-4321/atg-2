import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState("false");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading("true");
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading("false");
      })
      .catch((err) => {
        setLoading("false");
        setError("error");
      });
  }, [url]);

  return [loading, data, error];
};
