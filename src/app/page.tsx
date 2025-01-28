"use client";

import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const unityURL = "unity/Build";
  const { unityProvider } = useUnityContext({
    loaderUrl: unityURL + "/build.loader.js",
    dataUrl: unityURL + "/build.data",
    frameworkUrl: unityURL + "/build.framework.js",
    codeUrl: unityURL + "/build.wasm",
  });

  return (
    <Unity
      id="unity-canvas"
      unityProvider={unityProvider}
      style={{ width: "100vw", height: "100vh" }}
      matchWebGLToCanvasSize={true}
      devicePixelRatio={2}
    />
  );
}
