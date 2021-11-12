import { useState} from "react";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const httpHandler = async (requestConfig, applydata) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      applydata(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  return { error, isLoading, httpHandler };
};

export default useHttp;
