// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// const initialData = {
//   email:'',
//   password: '',
//   rol: ''
// }

// export function AuthProvider({ children }) {

//     const [user, setUser] = useState(initialData);

//     return (
//       <AuthContext.Provider
//         value={{user, setUser}}
//       >
//         {children}
//       </AuthContext.Provider>
//     );
//   }