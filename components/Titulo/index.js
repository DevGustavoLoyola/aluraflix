import styles from './Titulo.css';

function Titulo({ children }) {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    )
}

export default Titulo;