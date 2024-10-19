import styles from "./style.module.css"
import { ButtonItems } from "./ButtonItems"
export const ButtonDisplay = () => {

    const numberButtons = [ "C" ,"1","2","3","+","4","5","6","-","7","8","9","*","0","00","%","=",'.',"/"]

    

    return (
        <>
            <ButtonItems numbers={numberButtons}></ButtonItems>
        </>
    )
}