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

  return (
    <div className="container">
      {isLoaded === false && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            color: "white",
          }}
        >
          <p>가챠타임 입장하는 중.. ({loadingProgression * 100}%)</p>
        </div>
      )}
      <Unity
        id="unity-canvas"
        unityProvider={unityProvider}
        style={{
          width: "100vw",
          height: "100vh",
          display: "none",
          cursor: "default",
        }}
        matchWebGLToCanvasSize={true}
        devicePixelRatio={2}
      />
    </div>
  );
}
