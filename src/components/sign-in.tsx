import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./styles/sign-up.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import FacebookLogin from "./facebook-login";
import InstagramLogin from "./instagram-login";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const { handleSubmit, control, formState } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Signed in successfully");
    toast.error("Error");
    navigate("/");
  };

  const validationRules = {
    email: {
      required: "Email is required",
      pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: { required: "Password is required" },
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="form1"
        type="email"
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form2"
        type="password"
      />

      <MDBBtn className="mb-4">Sign in</MDBBtn>
      <InstagramLogin />
      <FacebookLogin />
    </MDBContainer>
  );
}

export default SignIn;
