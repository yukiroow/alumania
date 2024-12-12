import Logo from "../assets/logo.svg";
import BannerText from "../assets/banner-text.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
    const nav = useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        employment: "",
        location: "",
        email: "",
        company: "",
        course: "",
        password: "",
        confirmPassword: "",
        diploma: null,
    });

    const [inputError, setInputError] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        username: "",
        employment: "",
        location: "",
        email: "",
        company: "",
        course: "",
        password: "",
        confirmPassword: "",
        diploma: "",
    });

    const [error, setError] = useState("");

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError("");
            }, 2000);
            return () => clearTimeout(timer);
        }
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
                nav("/");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [error, success]);

    const handleFormInput = (event) => {
        const { name, value } = event.target;
        setUserData((values) => ({ ...values, [name]: value }));
    };

    const handleDropdownClick = () => {
        const menu = document.activeElement;
        if (menu) {
            menu.blur();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/jpg",
        ];

        if (!file) return;

        if (!allowedTypes.includes(file.type)) {
            setInputError((values) => ({
                ...values,
                diploma: "Only JPG, JPEG, and PNG files are allowed.",
            }));
            setUserData((values) => ({ ...values, diploma: null }));
            event.target.files;
            return;
        }

        if (file && file.size > 5_242_880) {
            setInputError((values) => ({
                ...values,
                diploma: "Diploma must not exceed 5 MB.",
            }));
            setUserData((values) => ({ ...values, diploma: null }));
        } else {
            setError(false);
            setInputError((values) => ({
                ...values,
                diploma: "",
            }));
            setUserData((values) => ({ ...values, diploma: file }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = 0;
        setInputError({
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
            diploma: "",
        });

        setUserData((values) => ({
            ...values,
            firstName: userData.firstName.trim().replace(/\s\s+/g, " "),
            middleName: userData.middleName.trim().replace(/\s\s+/g, " "),
            lastName: userData.lastName.trim().replace(/\s\s+/g, " "),
            company: userData.company.trim().replace(/\s\s+/g, " "),
        }));

        if (!userData.firstName) {
            errors++;
            setInputError((values) => ({
                ...values,
                firstName: "Please enter your first name!",
            }));
        }
        if (!userData.lastName) {
            errors++;
            setInputError((values) => ({
                ...values,
                lastName: "Please enter your last name!",
            }));
        }
        if (!userData.username) {
            errors++;
            setInputError((values) => ({
                ...values,
                username: "Please enter your desired username!",
            }));
        }
        if (!userData.employment) {
            errors++;
            setInputError((values) => ({
                ...values,
                employment: "Please select your employment status!",
            }));
        }
        if (!userData.location) {
            errors++;
            setInputError((values) => ({
                ...values,
                location: "Please select your location!",
            }));
        }
        if (!userData.email) {
            errors++;
            setInputError((values) => ({
                ...values,
                email: "Please enter your email address!",
            }));
        }
        if (userData.email && !/\S+@\S+\.\S+/.test(userData.email)) {
            errors++;
            setInputError((values) => ({
                ...values,
                email: "Please enter a valid email",
            }));
        }
        if (userData.employment === "Employed" && !userData.company) {
            errors++;
            setInputError((values) => ({
                ...values,
                company: "Please enter your company name!",
            }));
        }
        if (!userData.course) {
            errors++;
            setInputError((values) => ({
                ...values,
                course: "Please enter your graduated course!",
            }));
        }
        if (!userData.diploma) {
            errors++;
            setInputError((values) => ({
                ...values,
                diploma: "Please upload your diploma for validation!",
            }));
        }
        if (!userData.password) {
            errors++;
            setInputError((values) => ({
                ...values,
                password: "Please enter your desired password!",
            }));
        }
        if (userData.password && /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(userData.password)) {
            errors++;
            setInputError((values) => ({
                ...values,
                password: "Password must be at least 8 characters, have a digit, a special, upper-case, and lower-case character.",
            }));
        }
        if (!userData.confirmPassword) {
            errors++;
            setInputError((values) => ({
                ...values,
                confirmPassword: "Please re-enter your desired password!",
            }));
        }
        if (userData.password !== userData.confirmPassword) {
            errors++;
            setInputError((values) => ({
                ...values,
                confirmPassword: "Passwords do not match!",
            }));
        }

        if (errors > 0) {
            setError("Please fix all the errors first!");
        } else {
            const formData = new FormData();
            Object.entries(userData).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const signup = async () => {
                await axios
                    .post("http://localhost:2012/auth/signup", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then(() => {
                        setSuccess(true);
                    })
                    .catch((err) => {
                        if (err.status) {
                            setError("Username already taken!");
                        }
                    });
            };

            signup();
        }
    };

    return (
        <>
            {error && <ErrorAlert msg={error} />}
            {success && <SuccessAlert />}
            <main className="flex flex-row h-screen bg-primary">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col flex-1 mx-auto px-6 items-center rounded-tr-box rounded-br-box bg-base-100"
                    autoComplete="new-off"
                >
                    <Banner />
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                name="firstName"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["firstName"]}
                                onChange={(e) => {
                                    if (!/^[A-Za-z\s]*$/.test(e.target.value))
                                        return;
                                    if (e.target.value.length > 50) return;
                                    handleFormInput(e);
                                }}
                            />
                            {inputError.firstName && (
                                <span className="label-text text-error italic">
                                    {inputError.firstName}
                                </span>
                            )}
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Middle Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your middle name"
                                name="middleName"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["middleName"]}
                                onChange={(e) => {
                                    if (!/^[A-Za-z\s]*$/.test(e.target.value))
                                        return;
                                    if (e.target.value.length > 40) return;
                                    handleFormInput(e);
                                }}
                            />
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                name="lastName"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["lastName"]}
                                onChange={(e) => {
                                    if (!/^[A-Za-z\s]*$/.test(e.target.value))
                                        return;
                                    if (e.target.value.length > 40) return;
                                    handleFormInput(e);
                                }}
                            />
                            {inputError.lastName && (
                                <span className="label-text text-error italic">
                                    {inputError.lastName}
                                </span>
                            )}
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username*</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your desired username"
                                name="username"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["username"]}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(
                                        /\s/g,
                                        ""
                                    );
                                    if (e.target.value.length > 25) return;
                                    handleFormInput(e);
                                }}
                                autoComplete="off"
                            />
                            {inputError.username && (
                                <span className="label-text text-error italic">
                                    {inputError.username}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <div className="dropdown w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Employment*</span>
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
                            {inputError.employment && (
                                <span className="label-text text-error italic">
                                    {inputError.employment}
                                </span>
                            )}
                        </div>
                        <div className="dropdown w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Location*</span>
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
                            {inputError.location && (
                                <span className="label-text text-error italic">
                                    {inputError.location}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email*</span>
                            </div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email address"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["email"]}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(
                                        /\s/g,
                                        ""
                                    );
                                    if (e.target.value.length > 50) return;
                                    handleFormInput(e);
                                }}
                            />
                            {inputError.email && (
                                <span className="label-text text-error italic">
                                    {inputError.email}
                                </span>
                            )}
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Company Name</span>
                            </div>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter your company name"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["company"]}
                                onChange={(e) => {
                                    if (e.target.value.length > 30) return;
                                    handleFormInput(e);
                                }}
                            />
                            {inputError.company && (
                                <span className="label-text text-error italic">
                                    {inputError.company}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Course*</span>
                            </div>
                            <input
                                type="text"
                                name="course"
                                placeholder="Enter your graduated course (Ex. BSIT, BSN, BMMA)"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["course"]}
                                onChange={(e) => {
                                    if (e.target.value.length > 64) return;
                                    handleFormInput(e);
                                }}
                            />
                            {inputError.course && (
                                <span className="label-text text-error italic">
                                    {inputError.course}
                                </span>
                            )}
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Upload Diploma* (png, jpg, jpeg)
                                </span>
                            </div>
                            <input
                                type="file"
                                name="diploma"
                                className="file-input file-input-primary w-full"
                                onChange={handleFileChange}
                                accept="image/jpeg,image/png,image/jpg"
                            />
                            {inputError.diploma && (
                                <span className="label-text text-error italic">
                                    {inputError.diploma}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="flex flex-row gap-5 justify-center w-10/12">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password*</span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your desired password"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["password"]}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(
                                        /\s/g,
                                        ""
                                    );
                                    if (e.target.value.length > 512) return;
                                    handleFormInput(e);
                                }}
                                autoComplete="new-off"
                            />
                            {inputError.password && (
                                <span className="label-text text-error italic">
                                    {inputError.password}
                                </span>
                            )}
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Confirm Password*
                                </span>
                            </div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Re-enter your desired password"
                                className="input input-bordered w-full max-w-xs"
                                value={userData["confirmPassword"]}
                                onChange={(e) => {
                                    e.target.value = e.target.value.replace(
                                        /\s/g,
                                        ""
                                    );
                                    if (e.target.value.length > 64) return;
                                    handleFormInput(e);
                                }}
                                autoComplete="new-off"
                            />
                            {inputError.confirmPassword && (
                                <span className="label-text text-error italic">
                                    {inputError.confirmPassword}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="flex flex-row gap-5 justify-center items-center w-10/12 mt-10">
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
                        onClick={() => nav("/")}
                        className="btn btn-wide mt-6"
                    >
                        Login
                    </button>
                </aside>
            </main>
        </>
    );
};

const Banner = () => {
    return (
        <>
            <div className="flex flex-row self-center">
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

const ErrorAlert = ({ msg }) => {
    return (
        <>
            <div
                role="alert"
                className="alert alert-error absolute w-auto top-2 left-2 fade-in-out"
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
                <span>{msg}</span>
            </div>
        </>
    );
};

const SuccessAlert = () => {
    return (
        <>
            <div
                role="alert"
                className="alert alert-info absolute w-auto top-2 left-2 fade-in-out"
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
                <span>
                    Signup Successful! Please wait for our email while we verify
                    your account!
                </span>
            </div>
        </>
    );
};

export default SignupPage;
