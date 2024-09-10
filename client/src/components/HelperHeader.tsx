import { Button } from "./ui/button";
import { Save, Share2, Fullscreen} from 'lucide-react';
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDispatch, useSelector } from "react-redux";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";


export default function HelperHeader() {
  const dipsatch = useDispatch();
  const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);
  return (

    <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
      <div className="__btn_container flex gap-1">
        <Button className="flex gap-1 justify-end" variant="success">
          <Save size={20} /> Save
        </Button>
        <Button className="flex gap-1 justify-end" variant="secondary">
          <Share2 size={20} /> Share
        </Button>
        <Link to="/fullscreen">
        <Button className="flex gap-1 justify-end" variant="secondary">
        <Fullscreen size={16} strokeWidth={1} /> Full Screen
        </Button>
        </Link>
      </div>
      <div className="__tab_switcher flex ml-2 justify-center items-center">
        <small>Language: </small>
        <Select defaultValue={currentLanguage} onValueChange={(value) => dipsatch(updateCurrentLanguage(value as CompilerSliceStateType["currentLanguage"]))}>
          <SelectTrigger className="w-[120px] bg-gray-900 focus:ring-0 margin-1px">
            <SelectValue placeholder="html" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}
