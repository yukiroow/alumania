import Logo from "../assets/logo.svg";
import BannerText from "../assets/banner-text.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const nav = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleFormInput = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setCredentials((values) => ({ ...values, [key]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Binding to Server POST Request
    };

    return (
        <>
            <main className="flex flex-row h-screen bg-primary">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col flex-1 mx-auto px-6 items-center rounded-tr-box rounded-br-box bg-base-100"
                >
                    <Banner />
                    <h1 className="text-2xl text-gray-500 font-thin self-center my-3">
                        Login to Your Account
                    </h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="input input- input-bordered w-full max-w-xs block mb-2"
                        value={credentials["username"]}
                        onChange={handleFormInput}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs block mt- mb-5"
                        value={credentials["password"]}
                        onChange={handleFormInput}
                    />
                    <input
                        type="submit"
                        className="btn btn-wide block btn-secondary"
                        value="Login"
                    />
                </form>
                <aside className="flex flex-col basis-1/3 mx-auto items-center px-20">
                    <h1 className="text-3xl font-bold text-center mt-96 text-primary-content">
                        NEW HERE?
                    </h1>
                    <p className="text-xl font-thin text-center text-primary-content">
                        Create your Account Now
                    </p>
                    <button 
                    onClick={() => nav('/signup')}
                    className="btn btn-wide mt-6">Sign-up</button>
                </aside>
            </main>
        </>
    );
};

const Banner = () => {
    return (
        <>
            <div className="flex flex-row self-center mt-48 mb-14">
                <img src={Logo} alt="Alumania Logo" className="w-36" />
                <img
                    src={BannerText}
                    alt="Alumania Text name"
                    className="w-80"
                />
            </div>
        </>
    );
};

export default LoginPage;
