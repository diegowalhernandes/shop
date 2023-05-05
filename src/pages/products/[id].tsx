
import Image from 'next/image';
import shirt1 from '../../../public/assets/shirt/shirt1.png'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/products';

export default function Product(){

 

  return(
    <ProductContainer>
          <ImageContainer>
            <Image src={shirt1} alt='' />
          </ImageContainer>
          <ProductDetails>
            <h1>Camiseta</h1>
            <span>R$ 79,90</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Maxime provident repudiandae quis quo rerum suscipit vitae aperiam,
               inventore dolorum ab nam? Ad, suscipit natus officia cupiditate eligendi repellat itaque voluptatem.</p>

            <button>
              Comprar Agora
            </button>
          </ProductDetails>
        </ProductContainer>
  )
}