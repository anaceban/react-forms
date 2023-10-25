async function login(loginUser: User, token: string) {
  localStorage.setItem("user", JSON.stringify(loginUser));
  localStorage.setItem("token", token);
  window.location.reload();
}
async function logOut() {
  localStorage.clear();
  window.location.reload();
}
function isAuth(): boolean {
  return localStorage.getItem("token") !== null;
}

export { login, isAuth, logOut };

export interface User {
  userID: string;
  name: string;
  pictureUrl: string;
}

export interface InstagramData {
  caption: string;
  media_url: string;
  id: string;
}
