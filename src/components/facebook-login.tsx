import React, { useCallback } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const REDIRECT_URI = "https://localhost:3000/profile";

const FacebookLogin = () => {
  const navigate = useNavigate();
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    alert("logout success");
  }, []);

  return (
    <>
      <div>
        <LoginSocialFacebook
          appId={"351302447299796"}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ data }) => {
            navigate("/profile");
            login(
              {
                userID: data?.userID,
                pictureUrl: data?.picture?.data?.url,
                name: data?.name,
              },
              data?.accessToken
            );
          }}
          onReject={(err) => {
            console.log(err);
          }}
          redirect_uri={REDIRECT_URI}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </>
  );
};

export default FacebookLogin;
