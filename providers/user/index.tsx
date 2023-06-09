import { NextPage } from "next";
import React, {
  FC,
  useReducer,
  useContext,
  PropsWithChildren,
  useEffect,
} from "react";
import { UserContext, UserActionContext, INITIAL_STATE } from "./context";
import {
  loginUserRequestAction,
  createUserRequestAction,
  logOutUserRequestAction,
} from "./action";
import { UserReducer } from "./reducer";
import { useMutate } from "restful-react";
import { notification } from "antd";
import { ILogin, IUser } from "../../interfaces";
import { useRouter } from "next/router";


const UserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const { push } = useRouter();

  const { mutate: loginUserHttp } = useMutate({
    path: "TokenAuth/Authenticate",
    verb: "POST",
  });
  const { mutate: createUserHttp } = useMutate({
    path: "services/app/Person/Create", // Update with the appropriate API endpoint for user creation
    verb: "POST",
  });

  const loginUser = async (payload: ILogin) => {
    try {
      const response = await loginUserHttp(payload);

      if (response.success && response.result.accessToken) {
        localStorage.setItem("token", response.result.accessToken);
        dispatch(loginUserRequestAction(response));
        notification.success({
          message: "Success",
          description: "Login successful",
        });
        push("/HomePage");
      } else {
        notification.error({
          message: "Error",
          description: "Invalid username or password",
        });
      }
    } catch (error) {
      // Handle error case
      notification.error({
        message: "Error",
        description: "An error occurred during login ",
      });
    }
  };

  const createUser = async (payload: IUser) => {
    try {
      const response = await createUserHttp(payload);
      console.log("response:", response);

      if (response.success) {
        // Handle successful user creation
        createUserRequestAction(payload)
        notification.success({
          message: "Success",
          description: "New person was registrated successfully",
        });
        push("/");
      } else {
        // Handle error case
        notification.error({
          message: "error",
          description: "New person was not registrated successfully",
        });
      }
    } catch (error) {
      notification.error({
        message: "error",
        description: "User creation error",
      });
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("token");
    push("/Auth");
    notification.success({
      message: "Success",
      description: "Logout successful",
    });
  };

  return (
    <UserContext.Provider value={state}>
      <UserActionContext.Provider value={{ loginUser, createUser, logOutUser }}>
        {children}
      </UserActionContext.Provider>
    </UserContext.Provider>
  );
};

function useLoginState() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuthState must be used within a Auth Provider");
  }
  return context;
}

function useLoginActions() {
  const context = useContext(UserActionContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a Auth Provider");
  }
  return context;
}

function useUser() {
  return {
    ...useLoginActions(),
    ...useLoginState(),
  };
}
export { UserProvider, useUser };
