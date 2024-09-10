import CodeEditor from "@/components/CodeEditor";
import HelperHeader from "@/components/HelperHeader";
import RenderCode from "@/components/RenderCode";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";


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
        defaultSize={50}>
          <RenderCode />
        </ResizablePanel>
    </ResizablePanelGroup>
  )
}
