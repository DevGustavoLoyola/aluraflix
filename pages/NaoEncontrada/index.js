import styles from './NaoEncontrada.css';

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Vish!</h2>
            <p>Não obtivemos resultados para sua busca.</p>
        </section>
    )
}

export default NaoEncontrada;