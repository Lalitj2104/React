import styles from "./button.module.css"

const Buttonss=()=>{

    const buttonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return (
    <div id="button-container" className={styles.buttonContainer}>
    {buttonNames.map(buttonName=><button className={styles.button}>{buttonName}</button>)}

    </div>
    );
};

export default Buttonss;