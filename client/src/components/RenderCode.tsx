import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const location = useLocation(); // Get the current route
  const isFullScreen = location.pathname === "/fullscreen";

  const combinedCode = `<html><style>${fullCode.css}</style><body>${fullCode.html}</body><script>${fullCode.javascript}</script></html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent( //To tell that this is html code and not a route
    combinedCode
  )}`;

  return (
    <div className={`bg-white ${isFullScreen ? 'h-[100vh]' : 'h-[calc(100dvh-60px)]'}`}>
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
}