import { useEffect, useState } from "react";
import { Robot } from "../../types";
import { fetchData } from "@/lib/fetchData";

interface ViewModel {
  loading: boolean;
  error: boolean;
  robots: Robot[];
}

export function useFetchData(): ViewModel {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    fetchData();
    const fetchFileData = async () => {
      // call the streamed data from the robots/api/route.ts
      const response = await fetch("robots/api");
      const stream = response.body;

      // check if stream is readable
      if (!stream) {
        return;
      }
      const reader = stream.getReader();
      const decoder = new TextDecoder("utf-8");
      let readResult = await reader.read();
      let robots: Robot[] = [];
      let data = "";
      while (!readResult.done) {
        data += decoder.decode(readResult.value, { stream: true });
        readResult = await reader.read();
      }
      data += decoder.decode();
      robots = JSON.parse(data);
      setRobots(robots);
      setLoading(false);
      setError(false);
    };

    fetchFileData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return { loading, error, robots };
}
