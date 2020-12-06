import Head from "next/head";
import {LayoutApp} from "../../modules";
import {PhotoCard, EmptyState} from "../../components";
import {useSelector} from "react-redux";

export default function() {

    let store = useSelector(store => store);

    const {favorites} = store.favorites;

    let sortFavorites = Object.values(favorites).sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });

    return (
        <LayoutApp>
            <Head>
                <title>Избранное</title>
            </Head>
            { sortFavorites.length ?
                sortFavorites.map((photo) => <PhotoCard item={photo} />)
                : <EmptyState text="Список избранного пуст" />
            }
        </LayoutApp>
    )
};
