import { useState } from "react";
import axios from "axios";

export const useApi = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string, method = "GET") => {
    setIsLoading(true);
    try {
      const response = await axios({
        url,
        method,
      });
      setData(response.data);
    } catch (err) {
      setError(err as Error);
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, setIsLoading, fetchData, setError };
};