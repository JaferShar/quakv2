import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import QLPEditor from "@/components/ui/QLPEditor.tsx";
import {LanguageSelector} from "@/components/ui/LanguageSelector.tsx";

function App() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);
  return (
      <>
          <div>
              <LanguageSelector/>
              <QLPEditor/>
              <Button variant={"secondary"} className={"cursor-pointer"}>Transform</Button>
          </div>
      </>

  )
}

export default App
