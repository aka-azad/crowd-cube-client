import { createContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  
  return (
    <AuthContext.Provider value={{ name: "azad" }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
