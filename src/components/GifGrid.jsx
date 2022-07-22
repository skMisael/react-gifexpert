import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category);
    
    // const [images, setimages] = useState([]);

    // const getImages = async() =>{
    //     const newImages = await getGifts(category);
    //     // console.log(images)
    //     setimages(newImages);
    //     // console.log(images)
    // }
    // useEffect(() => {
    //   getImages();
    // },[])
    // console.log(images)
   
    

  return (
    <>
        <h3>{category}</h3>
        {
          // isLoading ? ( <h2>Cargando...</h2>) : null
          isLoading && (<h2>Cargando...</h2>)
        }
       
        <div className='card-grid'>
          {
            images.map((image) => (
             <GifItem 
                  key={image.id}
                  {...image}
                  // image={image}
                  // url={image.url}
                  // title={image.title}
             />
            ))
          }
        </div>
      
    </>
  )
}
