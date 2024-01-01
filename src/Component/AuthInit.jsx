import React, { useEffect } from "react";
import { useLoading } from "../helpers/hooks/LoadingState";
import { useAuth } from "../helpers/hooks/Authentication";

const AuthInit = () => {
  const { setIsLoading } = useLoading();
  const { init } = useAuth();
  useEffect(() => {
    const initializeUser = async () => {
      try {
        await init();
        console.log();
      } catch (error) {
        console.error(error);
      } finally {
        await setIsLoading(false);
      }
    };
    initializeUser();
  }, []);

  return <></>;
};

export default AuthInit;
