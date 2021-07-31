import {
    Route,
    Redirect
} from 'react-router-dom';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
export function PublicRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          <>
          
            <Header></Header>
            {children}
            <Footer></Footer>
          </>
        }
      ></Route>
      
    );
}
export function VerifyRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() =>
          localStorage.usernameVerify ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                // state: { from: location }
              }}
            />
          )
        }
      />
    );
}
// export const SRoute = ({ component: Component, ...rest }) => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     return (
//       <>
//         {token != null ? (
//           <Route
//             {...rest}
//             render={(props) => (
//               <>
//                 <Header></Header>
//                 <div className="clearfix" />
//                 <div className="content">
//                   <Component {...props}></Component>
//                 </div>
//                 <Footer></Footer>
//               </>
//             )}
//           ></Route>
//         ) : (
//           <Redirect to="/login"></Redirect>
//         )}
//       </>
//     );
// };
  
// export const PublicRoute = ({ component: Component, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={(props) => (
//           <>
//             <Header></Header>
//             <div className="clearfix" />
//             <div className="content">
//               <Component {...props}></Component>
//             </div>
//             <Footer></Footer>
//           </>
//         )}
//       ></Route>
//     );
// };
  
// export const LoginRoute = ({ component: Component, ...rest }) => {
//     const token = JSON.parse(localStorage.getItem("token"));
//     return (
//       <>
//         {token == null ? (
//           <Route
//             {...rest}
//             render={(props) => (
//               <>
//                 <Header></Header>
//                 <div className="clearfix" />
//                 <div className="content">
//                   <Component {...props}></Component>
//                 </div>
//                 <Footer></Footer>
//               </>
//             )}
//           ></Route>
//         ) : (
//           <Redirect to="/"></Redirect>
//         )}
//       </>
//     );
// };
  