import "./App.css";
import EmailSignin from "./EmailSignin";
import PhoneSignIn from "./PhoneSignIn";
import Reset from "./Reset";

import Signin from "./Signin";



function App() {
 

  return (
    <div className="app">
     <PhoneSignIn/>
     <EmailSignin/>
     <Signin/>
     <Reset/>
    </div>
  );
}
export default App;


