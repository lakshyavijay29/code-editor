import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { loadLanguage, langNames, langs } from '@uiw/codemirror-extensions-langs';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export default function CodeEditor() {
    const currentLanguage = useSelector((state: RootState) => state.compilerSlice.currentLanguage);
    const [value, setValue] = React.useState("console.log('hello world!');");
    const onChange = React.useCallback((val: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);

    return (
        <CodeMirror value={value} height="100vh" extensions={[loadLanguage(currentLanguage)!]} onChange={onChange}
            theme={vscodeDarkInit({
                settings: {
                    caret: '#c6c6c6',
                    fontFamily: 'monospace',
                }
            })} />
    )
}
