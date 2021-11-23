import {connect} from 'react-redux'
// import {addToCart} from '../Services/Actions/Action'
import Header from "../Components/Header"
const mapStateToProps=state=>({
cartData:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

// export default Home;