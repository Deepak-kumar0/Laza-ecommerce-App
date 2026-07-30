import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/login';
import Home from '../screen/home';
import Splash from '../screen/splash';
import Signup from '../screen/signup';
import Welcome from '../screen/welcome';
import ForgotPassword from '../screen/forgotpassword';
import VerificationCode from '../screen/verificationcode';
import NewPassword from '../screen/newpassword';
import Product from '../screen/product';
import Cart from '../screen/cart';
import Wishlist from '../screen/wishlist';
import camera from '../screen/camera';
import TabNavigation from './bottomtabs/tabNavigation';
import reviews from '../screen/reviews';
import AddReview from '../screen/addReview';
import Address from '../screen/Address';
import payment from '../screen/payment';
import AddnewCard from '../screen/AddnewCard';
import orderdone from '../screen/orderdone';
import DrawerNavigator from './drawer/DrawerNavigation';


export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="main" component={DrawerNavigator}/>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="welcome" component={Welcome} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="verificationcode" component={VerificationCode} />
      <Stack.Screen name="newpassword" component={NewPassword}/>
      
      {/* <Stack.Screen name="home" component={Home} /> */}
      <Stack.Screen name="product" component={Product}/>
      <Stack.Screen name="reviews" component={reviews}/>
      <Stack.Screen name="Addreviews" component={AddReview}/>
      <Stack.Screen name="Address" component={Address}/>
      <Stack.Screen name="payment"  component={payment}/>
      <Stack.Screen name="AddnewCard" component={AddnewCard}/>
      <Stack.Screen name='orderdone' component={orderdone}/>
      <Stack.Screen name="cart" component={Cart}/>
      <Stack.Screen name="wishlist" component={Wishlist}/>
      <Stack.Screen name="camera" component={camera}/>
    </Stack.Navigator>
  );
}
