import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {verifyEmail , resendOTP} from "../../services/auth.service"
function Verify(){
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        console.log(data)
        try{
            const res = await verifyEmail(data.otp);
            console.log(res.data);  
            if(res.status === 200){
                Swal.fire({
                    title: "Xác thực thất bại",
                    icon: "error",
                    text: `${res.data.message}`,
                    confirmButtonText: "OK",
                });
            }
            if(res.status  === 201){
                delete localStorage.usernameVerify
                history.push('/home');
                // Swal.fire({
                //     title: "Đăng ký thành công. Vui lòng xác thực tài khoản trước khi đăng nhập!",
                //     showCancelButton: true,
                //     confirmButtonText: `OK`
                // }).then((result) => {
                //     /* Read more about isConfirmed, isDenied below */
                //     if (result.isConfirmed) {
                //         localStorage.usernameVerify = user.username;  
                //         history.push('/verify');
                //     } 
                // })
            }
        }
        catch(err){
            console.log(err);
        }
    };
    const resendButton_Clicked =async ()=>{
        console.log("resended clicked",localStorage.getItem("usernameVerify"));
        const usernameVerify = localStorage.getItem("usernameVerify");
        const res = await resendOTP(usernameVerify);
        console.log(res.data);  
        if(res.status === 200){
            Swal.fire({
                title: "Something wrong",
                icon: "error",
                text: `${res.data.message}`,
                confirmButtonText: "OK",
            });
        }
        if(res.status  === 201){
            Swal.fire({
                title: "Sended",
                icon: "success",
                text: `${res.data.message}`,
                confirmButtonText: "OK",
            });
        }
    }
    const backLogin_Clicked = () =>{
        delete localStorage.usernameVerify;
        console.log(localStorage.getItem('usernameVerify'));
        history.push('/login');
    }
    return (
        <div className="main-content">
            <div className="login-content-page main-conten-text">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login">
                            <div className="main-box-top-title">
                                <h1 className="title-main-page font-48 text-center">
                                    Verify your email!
                                </h1>
                                <div className="description-main-page text-center font-18">
                                    Enter your OTP code we've been sent to your email!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 wow fadeInUp column-top-login form-bistkey">
                            <div className="form-subscribe float-none margin-top-50">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="inputLoginForm-otp">OTP</label>
                                        <input type="text" className="form-control" id="inputLoginForm-otp" placeholder="123456" {...register("otp", { minLength: 6, maxLength: 6 })} required >
                                        </input>
                                    </div>
                                    <div className="login-submit">
                                        <p className="sub-account">Back to Login? <a className="btn" onClick={()=>backLogin_Clicked()}>Back</a></p>
                                        <a className="btn sub-login btn btn-success" onClick={()=>resendButton_Clicked()}>Resend OTP</a>
                                    </div>
                                    <div className="login-facebook margin-top-35">
                                        <button className="btn sub-fb">Verify OTP</button>
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
export default Verify;