import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../screen/login';
import home from '../screen/home';
import splash from '../screen/splash';
import signup from '../screen/signup';
import welcome from '../screen/welcome';
import forgotpassword from '../screen/forgotpassword';
import verificationcode from '../screen/verificationcode';
import newpassword from '../screen/newpassword';
import product from '../screen/product';
// import SignUpScreen from '../screen/signup';
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="splash" component={splash} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="signup" component={signup} />
      <Stack.Screen name="welcome" component={welcome} />
      <Stack.Screen name="forgotpassword" component={forgotpassword} />
      <Stack.Screen name="verificationcode" component={verificationcode} />
      <Stack.Screen name="newpassword" component={newpassword}/>
      
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="product" component={product}/>
    </Stack.Navigator>
  );
}
