import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";


export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGifts(category);
        setimages(newImages);
        setIsLoading(false);
    }
    useEffect(() => {
      getImages();
    },[])


    return{
        // images:images,
        // isLoading: isLoading,
        images,
        isLoading
    }
}
