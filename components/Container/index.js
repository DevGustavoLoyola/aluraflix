import styles from './Container.css';

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container;