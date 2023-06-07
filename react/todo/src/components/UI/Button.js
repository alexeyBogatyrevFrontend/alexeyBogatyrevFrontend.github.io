import styles from './Button.module.css'

export default function Button(props) {
    const { children, title, onClick, disabled = false } = props

    return (
        <button
            disabled={disabled}
            title={title}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
