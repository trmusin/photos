import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import styles from "./styles.module.scss";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Link from "next/link";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import {formatDate} from "../../plugins/format-date";
import PhotoIcon from '@material-ui/icons/Photo';
import WebAssetIcon from '@material-ui/icons/WebAsset';




export default ({item})=> {

    return (
        <Card key={item.id} className={styles.container}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" >
                        {item.user.username ? item.user.username[0].toUpperCase(): "?"}
                    </Avatar>
                }
                title={item.title}
                subheader={item.user.username}
            />
            <GridList cellHeight={160} cols={2}>
                {item.preview_photos.map((tile) => (
                    <GridListTile key={tile.id} cols={1}>
                        <img src={tile.urls.small} />
                    </GridListTile>
                ))}
            </GridList>
            <CardActions className={styles.footer}>
                <div className={styles.footer__date}>
                    <span>Обновлен:</span>
                    {formatDate(item.updated_at)}
                </div>
                <div className={styles.footer__actions}>
                    <div className={styles.footer__total}>
                        <PhotoIcon />
                        <span>{item.total_photos}</span>
                    </div>
                    <Link href={`/collections/[id]`} as={`/collections/${item.id}`} passHref>
                        <IconButton component="a" aria-label="show full">
                            <WebAssetIcon />
                        </IconButton>
                    </Link>
                </div>
            </CardActions>
        </Card>
    );
}