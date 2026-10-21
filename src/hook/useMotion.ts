import { useLayoutEffect, useState } from "react";

export function useMotion() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  useLayoutEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
  }, [motionEnabled]);

  const toggleMotion = () => {
    setMotionEnabled((enabled) => !enabled);
  };

  return { motionEnabled, toggleMotion };
}
