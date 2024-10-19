import styles from "./style.module.css"
export const ButtonItems = (props) =>{
    const array = ["C","+","-","/","*","=","."]
    const selectButton = document.querySelectorAll('button');
    if( selectButton.forEach((bitem)=>bitem.innerText.includes(array))) {selectButton.classList.remove("btn btn-success")
        selectButton.classList.add("btn btn-warning")
    }
    return(
        props.numbers.map((btn)=><button key={btn} className="btn btn-success">{btn}</button>)
    )
}