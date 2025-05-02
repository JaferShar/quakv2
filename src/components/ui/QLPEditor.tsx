import {Editor} from "@monaco-editor/react";
import {useState} from "react";

function QLPEditor() {
    const [value, setValue] = useState('');
    return <div>
        <Editor
            height="90vh"
            defaultLanguage="javascript"
            defaultValue="// Some Quantum Code"
            theme="vs-dark"
            value={value}
            onChange={(value) => setValue(value || '')}
        />
    </div>;
}

export default QLPEditor;