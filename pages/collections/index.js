import {CollectionBox} from "../../components";
import {LayoutApp, withScroll} from "../../modules";
import Head from 'next/head';
import {useEffect} from "react";
import {appActions, collectionsActions} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";



const CollectionList = withScroll(CollectionBox);

export default function Collections() {

    let state = useSelector(state => state);
    const dispatch = useDispatch();

    const {collections: {count, hasMore, data, response},} = state;

    const getCollections = () => dispatch(collectionsActions.getData(count));

    useEffect(() => {
        if(count===1){
            dispatch(appActions.showLoader(true));
            getCollections();
        }
    }, []);


    return (
        <LayoutApp>
            <Head>
                <title>Коллекции</title>
            </Head>
            <CollectionList data={data} action={getCollections} hasMore={hasMore} />
        </LayoutApp>
    )
};



