import Head from "next/head";
import {useEffect} from "react";
import { useRouter } from 'next/router';
import {LayoutApp, withScroll} from "../../modules";
import {PhotoCard} from "../../components";
import {appActions, collectionsActions} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";


const PhotosList = withScroll(PhotoCard);

export default function Collection () {

    let state = useSelector(state => state);
    const dispatch = useDispatch();

    const router = useRouter();

    const {collections: {collection:{count, hasMore, data, response}},} = state;

    const getCollection = () => dispatch(collectionsActions.getCollectionData({page:count, query:router.query.id}));

    useEffect(() => {
        dispatch(appActions.showLoader(true));
        dispatch(collectionsActions.resetCollection());
        getCollection();
    }, []);

    return (
        <LayoutApp>
            <Head>
                <title>Коллекция</title>
            </Head>
            <PhotosList data={data} action={getCollection} hasMore={hasMore} />
        </LayoutApp>
    )
};