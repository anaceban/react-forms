import React, { useCallback } from "react";
import { LoginSocialInstagram } from "reactjs-social-login";
import { InstagramLoginButton } from "react-social-login-buttons";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

const REDIRECT_URI = "https://localhost:3000/";

const InstagramLogin = () => {
  const navigate = useNavigate();
  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    alert("logout success");
  }, []);

  const onLoginSuccess = useCallback((data: any) => {
    login(
      {
        userID: data?.userID,
        pictureUrl: data?.picture?.data?.url,
        name: data?.data?.username,
      },
      data?.data?.access_token
    );
    navigate("/");
  }, []);

  return (
    <>
      <div>
        <LoginSocialInstagram
          client_id={"160488847086501"}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={onLoginSuccess}
          onReject={(err) => {
            console.log(err);
          }}
          redirect_uri={REDIRECT_URI}
          client_secret={"e115e0bf5a138ac479cadf96dba213a5"}
        >
          <InstagramLoginButton />
        </LoginSocialInstagram>
      </div>
    </>
  );
};

export default InstagramLogin;
