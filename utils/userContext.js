import { createContext } from "react";

const userContext = createContext({
  login: "Default User",
});

export default userContext;
