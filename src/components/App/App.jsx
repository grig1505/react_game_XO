import { useState, useRef, useEffect } from "react";
import styles from "../../components/App/App.module.css";

function App() {
  //  const [value, setValue] = useState("");
  //  const [bdisabled, setBDisabled] = useState(true);


    useEffect(() => {

    }, []);

    const onClick = () => {

    };


    return (
        <div className={styles.app}>
            <h1 className={styles.pageHeading}>Ввод значения</h1>
            <p className={styles.noMarginText}>
                Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
            </p>
            {errorText && <div className={styles.error}>{errorText}</div>}
            <div className={styles.buttonsContainer}>
                <button onClick={onClick} className={styles.button}>Ввести новое</button>
                <button className={styles.button} onClick={onClickAddList} disabled={bdisabled}>Добавить в список</button>
            </div>
            <div className={styles.listContainer}>
                <h2 className={styles.listHeading}>Список:</h2>
                <p className={styles.noMarginText}>{listItems.length === 0 ? "Нет добавленных элементов" : ""}</p>
                <ul className={styles.list}>
                    {listItems.map((item, index) => (
                        <li key={index} className={styles.listItem}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
