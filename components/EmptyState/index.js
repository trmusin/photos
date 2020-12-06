import styles from './styles.module.scss';




export default ({text})=>{

    return(
        <div className={styles.empty}>
            {text}
        </div>
    )
}