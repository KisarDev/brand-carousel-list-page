import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Zyph from 'library-mshops'

const appId = "zyph-carousel-galery-brands-v2";

function getTarget() {
  return (
    document.getElementById(appId) ||
    document.querySelector(`[data-id=${appId}]`) ||
    null
  );
}
const render = () => {
  const target = getTarget();
  if (!target) return;
  ReactDOM.createRoot(target).render(
    <React.StrictMode>
      <div data-component={appId}>
        <App appId={appId} />
      </div>
    </React.StrictMode>
  );
};

setTimeout(() => {
  if(location.host.includes('localhost')) {
    render()
    return
  }
  
  Zyph.insertComponent(appId, render)
}, 1500)
