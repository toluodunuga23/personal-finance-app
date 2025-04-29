import { useState, useEffect } from "react";
import axios from "axios";

export const useApi = (url: string, method = "GET") => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url,
        method
      });
      setData(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method]); // Add dependencies

  return { data, isLoading, error };
};