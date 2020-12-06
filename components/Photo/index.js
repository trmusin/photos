import styles from './styles.module.scss'


export default ({photo})=>{

    return(
        <div className={styles.container}>
            <img src={photo.urls.full} alt="photo" />
        </div>
    )
};