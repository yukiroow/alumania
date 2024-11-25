import Logo from "./assets/logo.svg";
import BannerText from "./assets/banner-text.svg";
import { useState } from "react";
const SignupPage = () => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [employment, setEmployment] = useState("Select");
    const [location, setLocation] = useState("Select");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [diploma, setDiploma] = useState(null);

    const handleDropdownClick = () => {
        const menu = document.activeElement;
        if (menu) {
            menu.blur();
        }
    };

    return (
        <>
            <div className="flex flex-row h-screen bg-primary">
                <div className="flex flex-col flex-1 mx-auto px-6 items-center rounded-tr-box rounded-br-box bg-base-100">
                    <Banner />
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Middle Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={middleName}
                                onChange={(e) => {
                                    setMiddleName(e.target.value);
                                }}
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
                                className="input input-bordered w-full max-w-xs"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
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
                                {employment}
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setEmployment("Employed");
                                    }}
                                >
                                    <a>Employed</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setEmployment("Underemployed");
                                    }}
                                >
                                    <a>Underemployed</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setEmployment("Unemployed");
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
                                {location}
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setLocation("Domestic");
                                    }}
                                >
                                    <a>Domestic</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setLocation("Foreign");
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
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Company Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={company}
                                onChange={(e) => {
                                    setCompany(e.target.value);
                                }}
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
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
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
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                }}
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
                                className="file-input file-input-bordered w-full"
                                onChange={(e) => setDiploma(e.target.files[0])}
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12 mt-10">
                        <input
                            type="submit"
                            className="btn btn-wide block btn-secondary"
                            value="Login"
                        />
                    </div>
                </div>
                <div className="flex flex-col mx-auto items-center px-20">
                    <h1 className="text-3xl font-bold text-center mt-96 text-primary-content">
                        ALREADY HAVE AN ACCOUNT?
                    </h1>
                    <p className="text-xl font-thin text-center text-primary-content">
                        Login to your account
                    </p>
                    <button className="btn btn-wide mt-6">Login</button>
                </div>
            </div>
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
