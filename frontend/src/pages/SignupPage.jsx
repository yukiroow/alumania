import Logo from "../assets/logo.svg";
import BannerText from "../assets/banner-text.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {
    const nav= useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        employment: "",
        location: "",
        email: "",
        company: "",
        password: "",
        confirmPassword: "",
        diploma: null,
    });

    const handleFormInput = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        setUserData((values) => ({ ...values, [key]: value }));
    };

    const handleDropdownClick = () => {
        const menu = document.activeElement;
        if (menu) {
            menu.blur();
        }
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
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                name="firstName"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["firstName"]}
                                onChange={handleFormInput}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Middle Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                name="middleName"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["middleName"]}
                                onChange={handleFormInput}
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                name="lastName"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["lastName"]}
                                onChange={handleFormInput}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                name="username"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["username"]}
                                onChange={handleFormInput}
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <div className="dropdown w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Employment</span>
                            </div>
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn w-full"
                            >
                                {userData["employment"] || "Select"}
                            </div>
                            <ul
                                tabIndex={0}
                                name="employment"
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setUserData((values) => ({
                                            ...values,
                                            ["employment"]: "Employed",
                                        }));
                                    }}
                                >
                                    <a>Employed</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setUserData((values) => ({
                                            ...values,
                                            ["employment"]: "Underemployed",
                                        }));
                                    }}
                                >
                                    <a>Underemployed</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setUserData((values) => ({
                                            ...values,
                                            ["employment"]: "Unemployed",
                                        }));
                                    }}
                                >
                                    <a>Unemployed</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Location</span>
                            </div>
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn w-full"
                            >
                                {userData["location"] || "Select"}
                            </div>
                            <ul
                                tabIndex={0}
                                name="location"
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setUserData((values) => ({
                                            ...values,
                                            ["location"]: "Domestic",
                                        }));
                                    }}
                                >
                                    <a>Domestic</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setUserData((values) => ({
                                            ...values,
                                            ["location"]: "Foreign",
                                        }));
                                    }}
                                >
                                    <a>Foreign</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["email"]}
                                onChange={handleFormInput}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Company Name</span>
                            </div>
                            <input
                                type="text"
                                name="company"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["company"]}
                                onChange={handleFormInput}
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["password"]}
                                onChange={handleFormInput}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Confirm Password
                                </span>
                            </div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["confirmPassword"]}
                                onChange={handleFormInput}
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-lg">
                            <div className="label">
                                <span className="label-text">
                                    Upload Diploma
                                </span>
                            </div>
                            <input
                                type="file"
                                name="diploma"
                                className="file-input file-input-bordered w-full"
                                onChange={(e) =>
                                    setUserData((values) => ({
                                        ...values,
                                        ["diploma"]: e.target.files[0],
                                    }))
                                }
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12 mt-10">
                        <input
                            type="submit"
                            className="btn btn-wide block btn-secondary"
                            value="Signup"
                        />
                    </div>
                </form>
                <aside className="flex basis-1/3 flex-col mx-auto items-center px-20">
                    <h1 className="text-3xl font-bold text-center mt-96 text-primary-content">
                        ALREADY HAVE AN ACCOUNT?
                    </h1>
                    <p className="text-xl font-thin text-center text-primary-content">
                        Login to your account
                    </p>
                    <button 
                    onClick={()=>nav('/')}
                    className="btn btn-wide mt-6">Login</button>
                </aside>
            </main>
        </>
    );
};

const Banner = () => {
    return (
        <>
            <div className="flex flex-row self-center mt-10 mb-10">
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

export default SignupPage;
