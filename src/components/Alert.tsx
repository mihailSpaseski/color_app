import { createContext, FC, ReactNode } from "react";

interface AlertContext {}

export const AlertMessengerContext = createContext<AlertContext>({} as AlertContext);

export const AlertContextProvider: FC<{
  children: ReactNode;
  noOfMessages?: number;
  autoHideTimeout?: number;
  autoHideError?: boolean;
    }> = ({ children, noOfMessages = 5, autoHideTimeout = 3000, autoHideError = false }) => {
  return(
    <AlertMessengerContext.Provider value={{}}>
      {children}
    </AlertMessengerContext.Provider>
  );
};

export default AlertContext;