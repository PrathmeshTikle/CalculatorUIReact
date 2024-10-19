import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./components/style.module.css"
import { ProjectName } from "./ProjectName"
import { InputDisplay } from "./components/InputDisplay"
import { ButtonDisplay } from "./components/ButtonDisplay"
function App() {
  return (
    <>
     <ProjectName></ProjectName>
    <div id={styles.calculator}>
      <InputDisplay></InputDisplay>
      <div className={styles.buttoncalculator}>
      <ButtonDisplay></ButtonDisplay>
      </div>
    </div>
    </>
  )
}

export default App
