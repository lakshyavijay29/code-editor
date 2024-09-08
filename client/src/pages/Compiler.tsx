import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


export default function Compiler() {
  // const html = useSelector((state:RootState)=>state.compilerSlice.html)
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="h-[calc(100dvh-70px)] min-w-[350px]"
        defaultSize={50}>
          <HelperHeader />
          <CodeEditor />
        </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="h-[calc(100dvh-70px)] min-w-[350px]"
        defaultSize={50}>Two
        </ResizablePanel>
    </ResizablePanelGroup>
  )
}
