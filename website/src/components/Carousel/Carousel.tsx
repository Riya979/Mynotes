import Carousel from 'react-bootstrap/esm/Carousel'
import img1 from '../../static/img/1.jpg'

export const MyCarousel:React.FC<{}>=()=>{
    return<>
    <Carousel>
        <Carousel.Item>
            <img  width="100%" height="200px" src={img1}/>
      
        <Carousel.Caption>
            <h2>first slide</h2>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </>
}
