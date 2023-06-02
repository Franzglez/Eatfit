import { Button, ButtonGroup } from '@chakra-ui/react'
import iconcart from '../../assets/images/iconcart.svg'



function AddToCart() {
    return (
        <>
            <Plusless /> <span> {' '} </span>
            <Button
                mt={5}
                color='white'
                bg='#FF7E1B'>
                <img src={iconcart} className="addtocart" alt="addtocart" /> Add to cart
            </Button>

            
        </>
    )
}
export default AddToCart

