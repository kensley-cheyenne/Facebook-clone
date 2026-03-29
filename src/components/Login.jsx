import { Button } from "@mui/material";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message)); 
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/960px-2021_Facebook_icon.svg.png?_=20220821121039"
          alt=""
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2019.png"
          alt=""
        />
      </div>
      <Button type="submit" className="login__button" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
