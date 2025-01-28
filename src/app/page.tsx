"use client";

import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const unityURL = "unity/Build";
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: unityURL + "/build.loader.js",
    dataUrl: unityURL + "/build.data",
    frameworkUrl: unityURL + "/build.framework.js",
    codeUrl: unityURL + "/build.wasm",
  });
  console.log(loadingProgression);

  return (
    <div className="container">
      {isLoaded === false && (
        <div style={{ left: "50", right: "50" }}>
          <p>Loading... ({loadingProgression}%)</p>
        </div>
      )}
      <Unity
        id="unity-canvas"
        unityProvider={unityProvider}
        style={{ width: "100vw", height: "100vh" }}
        matchWebGLToCanvasSize={true}
        devicePixelRatio={2}
      />
    </div>
  );
}
