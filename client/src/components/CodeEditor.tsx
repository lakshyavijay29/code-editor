import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { loadLanguage} from '@uiw/codemirror-extensions-langs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {updateCodeValue,} from "@/redux/slices/compilerSlice";


export default function CodeEditor() {
    const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);
    const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode)
    const dispatch = useDispatch()
    const onChange = React.useCallback((value: string) => {
        // console.log('val:', val);
        // setValue(val);
        dispatch(updateCodeValue(value));
    }, []);

    return (
        <CodeMirror value={fullCode[currentLanguage]} height="calc(100vh - 70px - 50px)" extensions={[loadLanguage(currentLanguage)!]} onChange={onChange}
            theme={vscodeDarkInit({
                settings: {
                    caret: '#c6c6c6',
                    fontFamily: 'monospace',
                }
            })} />
    )
}
