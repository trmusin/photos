import Head from "next/head";
import unsplashApi from "../../api/api-unsplash";
import {Photo} from "../../components";

export default function Photos ({id, photo}) {
    console.log("photo", photo);

    if(photo.errors){
        return <h4>{photo.errors[0]}</h4>
    }

    return (
        <>
            <Head>
                <title>Фотография {id}</title>
            </Head>
            <Photo photo={photo.results}/>
        </>
    )
};

export async function getServerSideProps({params}) {
    let photo = await unsplashApi.getPhoto(params.id);
    return {
        props:{
            id: params.id,
            photo
        }
    }
}