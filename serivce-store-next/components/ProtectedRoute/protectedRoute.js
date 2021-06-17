
// import { appRoutes } from "";
// import { useAuthContext } from "../contexts";

// //check if you are on the client (browser) or server
// const isBrowser = () => typeof window !== "undefined";

// const ProtectedRoute = ({route,children}) => {
//   const {user} = useAuthContext();
//   const {isAuthenticated} = user.isLoggedIn();

//   let unprotectedRoutes = [
//     appRoutes.LOGIN_PAGE,
//     appRoutes.REGISTER_PAGE
//   ]

//   let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

//   if (isBrowser() && !isAuthenticated && pathIsProtected) {
//     router.push(appRoutes.LOGIN_PAGE);
//   }


//   return children;
// }



// export default  ProtectedRoute;