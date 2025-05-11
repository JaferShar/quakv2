import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {useEffect} from "react";
import QLPEditor from "@/components/ui/QLPEditor.tsx";
import QCircuit from "@/components/ui/QCircuit.tsx";


function App() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);
  return (
      <>
          <div>
              <QCircuit/>
                  <QLPEditor/>
                  <Button variant={"secondary"} className={"cursor-pointer mt-2"}>Transform</Button>
              </div>
          </>

          )
          }

          export default App
