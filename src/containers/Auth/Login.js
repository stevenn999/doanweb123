import React from 'react'
import { useHistory,NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {login, parseJwt} from "../../services/auth.service"
import Swal from "sweetalert2";
function Login(){
    const history = useHistory();
    const { register, handleSubmit  } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        try{
            const res = await login(data.username, data.password);
            console.log(res.data);  
            if(res.data.authenticated === "fail"){
                Swal.fire({
                    title: "Đăng nhập thấp bại",
                    icon: "error",
                    text: `${res.data.message}`,
                    confirmButtonText: "OK",
                });
            }
            if(res.data.authenticated === "verify"){
                Swal.fire({
                    title: "Xác thực tài khoản trước khi đăng nhập!",
                    showCancelButton: true,
                    confirmButtonText: `OK`
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        localStorage.usernameVerify = data.username;  
                        history.push('/verify');
                    } 
                })
            }
            if(res.data.authenticated === "success"){
                localStorage.accessToken = res.data.accessToken;  
                localStorage.refreshToken = res.data.refreshToken;  
                const obj = parseJwt(res.data.accessToken);
                localStorage.userEmail = obj.user_email;
                history.push('/');
            }
           
        }
        catch(err){
            console.log(err);
        }
    };
    return (
       <div className="login-page-content">
            <div className="login-content-page ">
                <div className="container custom-max-width-container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login">
                            <div className="main-box-top-title">
                                <h1 className="title-main-page font-48 text-center">
                                    Log in
                                </h1>
                                <div className="description-main-page text-center font-18">
                                    login with email address
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login form-bistkey">
                            <div className="form-subscribe float-none margin-top-50">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="inputLoginForm-username">USERNAME</label>
                                        <input type="text" className="form-control" id="inputLoginForm-username" placeholder="abc134" {...register("username")} required ></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputLoginForm-password">PASSWORD</label>
                                        <input type="password" className="form-control" id="inputLoginForm-password" placeholder="************" {...register("password")} required></input>
                                    </div>
                                    <div className="login-submit">
                                        <p className="sub-account">Don't have an account? <NavLink to="/register">Sign up</NavLink></p>
                                        <button className="btn sub-login">Log in</button>
                                    </div>
                                    <div className="login-facebook margin-top-35">
                                        <p className="social-fb">or sign in with social media</p>
                                        <button className="btn sub-fb">Log in with Facebook</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}
export default Login;