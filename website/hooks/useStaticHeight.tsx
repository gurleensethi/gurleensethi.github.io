import { useEffect, useState } from "react";

export const useStaticHeight = (): string => {
  const [height, setHeignt] = useState("100vh");

  useEffect(() => {
    setHeignt(`${window.innerHeight}px`);
  }, []);

  return height;
};
