import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles/sign-up.css";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email address"
    ),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), ""], "Passwords do not match"),
  gender: yup.string().required("Please select a gender"),
  age: yup
    .number()
    .required("Age is required")
    .min(14, "You must be at least 14 years old"),
});

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  age: number;
}

function SignUpWithYup() {
  const { handleSubmit, control, formState } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form className="centred-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} />
                {formState.errors.firstName && (
                  <p className="error">{formState.errors.firstName.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label>Last Name</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} />
                {formState.errors.lastName && (
                  <p className="error">{formState.errors.lastName.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label>Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} />
                {formState.errors.email && (
                  <p className="error">{formState.errors.email.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label>Password</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input type="password" {...field} />
                {formState.errors.password && (
                  <p className="error">{formState.errors.password.message}</p>
                )}
              </div>
            )}
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input type="password" {...field} />
                {formState.errors.confirmPassword && (
                  <p className="error">
                    {formState.errors.confirmPassword.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex-container">
          <div>
            <label>Gender</label>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="select-container">
                  <select {...field} className="custom-select">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {formState.errors.gender && (
                    <p className="error">{formState.errors.gender.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <label>Age</label>
            <Controller
              name="age"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <div>
                  <input type="number" {...field} />
                  {formState.errors.age && (
                    <p className="error">{formState.errors.age.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpWithYup;
