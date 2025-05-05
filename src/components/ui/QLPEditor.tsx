import {Editor} from "@monaco-editor/react";
import {useState} from "react";
import {LanguageSelector} from "@/components/ui/LanguageSelector.tsx";

function QLPEditor() {
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState("javascript");

    const onSelect = (language : string) => {
        setLanguage(language);
    }
    return <div>
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
            height="90vh"
            language={language}
            defaultValue="// Some Quantum Code"
            theme="vs-dark"
            value={value}
            onChange={(value) => setValue(value || '')}
        />
    </div>;
}

export default QLPEditor;