import Logo from "../assets/logo.svg";
import BannerText from "../assets/banner-text.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";

const LoginPage = () => {
    const nav = useNavigate();
    const { login, user } = useAuth();
    if (user) {
        nav("/home");
    }

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (hasError) {
            const timer = setTimeout(() => {
                setHasError(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [hasError]);

    const handleFormInput = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setCredentials((values) => ({ ...values, [key]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setCredentials((values) => ({
            ...values,
            ["username"]: credentials["username"].replace(/\s/g, ""),
            ["password"]: credentials["password"].replace(/\s/g, ""),
        }));

        if (
            credentials["username"].length < 4 ||
            credentials["username"].length > 24
        ) {
            setHasError(true);
            return;
        }

        // TODO: In-depth username validation

        if (credentials["password"].length < 4) {
            setHasError(true);
            return;
        }

        // TODO: In-depth password validation

        axios
            .post("http://localhost:2012/auth/login", credentials)
            .then((res) => {
                if (res.status == 200) {
                    const username = credentials["username"];
                    login({ username });
                }
            }).catch((error) => {
                if(error.response) {
                    setHasError(true);
                }
            });
    };

    return (
        <>
            {hasError && <ErrorAlert />}
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
                        onClick={() => nav("/signup")}
                        className="btn btn-wide mt-6"
                    >
                        Sign-up
                    </button>
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

const ErrorAlert = () => {
    return (
        <>
            <div
                role="alert"
                className="alert alert-error absolute w-72 top-2 left-2 fade-in-out"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>Invalid Credentials!</span>
            </div>
        </>
    );
};

export default LoginPage;
