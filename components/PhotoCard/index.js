import styles from "./styles.module.scss";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from "next/link";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import {formatDate} from "../../plugins/format-date";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {useDispatch, useSelector} from "react-redux";
import { favoritesActions } from "../../redux/actions";



export default ({item})=> {

    let store = useSelector(store => store);
    const dispatch = useDispatch();

    const {favorites} = store.favorites;

    const checkFavorites =(id)=>{

        let newFavorites = favorites;

        if(favorites[id]){
            delete favorites[id];
        } else {
            newFavorites[item.id] = {...item, time: Date.now()};
        }
        dispatch(favoritesActions.setFavorites(newFavorites));
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    let color = favorites[item.id] ? "#f44336" : '';

    return (
        <Card key={item.id} className={styles.container}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" >
                        {item.user.name ? item.user.name[0].toUpperCase(): "?"}
                    </Avatar>
                }
                title={item.user.name}
                subheader={formatDate(item.created_at)}
            />
            <CardMedia
                className={styles.media}
                image={item.urls.regular}
            />
            <CardActions className={styles.footer}>
                <div className={styles.like}>
                    <ThumbUpAltIcon />
                    <span>{item.likes}</span>
                </div>
                <div className={styles.footer__actions}>
                    <IconButton aria-label="add to favorites" onClick={()=>checkFavorites(item.id)}>
                        <FavoriteIcon style={{color: color}} />
                    </IconButton>
                    <Link href={`/photos/[id]`} as={`/photos/${item.id}`} passHref>
                        <IconButton component="a" aria-label="show full">
                            <FullscreenIcon />
                        </IconButton>
                    </Link>
                </div>
            </CardActions>
        </Card>
    );
}