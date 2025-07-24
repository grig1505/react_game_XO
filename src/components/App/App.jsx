import { useState, useRef, useEffect } from "react";
import styles from "../../components/App/App.module.css";

function App() {
    const [value, setValue] = useState("");
    const [bdisabled, setBDisabled] = useState(true);
    const [errorText, setErrorText] = useState("");
    const [listItems, setListItems] = useState([]);
    const currentValueRef = useRef("");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const onClick = () => {
        const inputWord = prompt('Введите значение:');
        if (inputWord && inputWord.length < 3) {
            setErrorText("Введенное значение должно содержать минимум 3 символа");
        } else if (inputWord) {
            setValue(inputWord);
            setBDisabled(false);
            setErrorText("");
            currentValueRef.current = inputWord;
        }
    };

    const dataformated = () => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    };

    const onClickAddList = () => {
        if (currentValueRef.current) {
            setListItems(prevItems => [
                ...prevItems,
                currentValueRef.current + " " + dataformated(),
            ]);
            setValue("");
            setBDisabled(true);
        }
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
