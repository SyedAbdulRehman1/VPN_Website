export const setUser = (user: any) => {
  let { first_name, last_name, name, email } = user;
  if (first_name && last_name) {
    name = first_name + " " + last_name;
  }
  const userData = { name, email };
  localStorage.removeItem("user");
  localStorage.setItem("user", JSON.stringify(userData));
};
// export const setUser = (user: any) => {
//   localStorage.removeItem("user");
//   localStorage.setItem("user", JSON.stringify(user));
// };

export const getUser = () => {
  const user = localStorage.getItem("user");
  if (user && user !== "undefined") {
    return JSON.parse(user);
  } else {
    return null;
  }
};

export const getToken = () => {
  const user = localStorage.getItem("user");
  if (user && user !== "undefined") {
    return JSON.parse(user).token;
  } else {
    return null;
  }
};

export const setToken = (token: any) => {
  localStorage.removeItem("token");
  localStorage.removeItem("temp-token");
  localStorage.setItem("token", token);
};

export const getTokenn = () => {
  return localStorage.getItem("token");
};

export const setTempToken = (token: any) => {
  localStorage.removeItem("temp-token");
  localStorage.setItem("temp-token", token);
};

export const getTempToken = () => {
  return localStorage.getItem("temp-token") || "";
};

export const setEmail = (email: any) => {
  localStorage.removeItem("email");
  localStorage.setItem("email", email);
};

export const getEmail = () => {
  const user = localStorage.getItem("email");
  return user;
};

export const getIsAuthenticated = () => {
  const user = localStorage.getItem("user");
  // const google = localst
  return user ? true : false;
};

// export const removeUser = () => {
//   localStorage.removeItem("user");
// };
export const removeUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
};
