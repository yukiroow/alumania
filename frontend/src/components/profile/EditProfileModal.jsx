import { useState } from "react";
import axios from "axios";
const EditProfileModal = ({
    userid,
    firstName,
    middleName,
    lastName,
    email,
    batch,
    school,
    course,
    company,
}) => {
    const [details, setDetails] = useState({
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        batch: batch,
        school: school,
        course: course,
        company: company,
    });

    const [inputError, setInputError] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        batch: "",
        school: "",
        course: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = 0;

        if (!details.firstName) {
            errors++;
            setInputError((values) => ({
                ...values,
                firstName: "Please enter a first name!",
            }));
        }
        if (!details.lastName) {
            errors++;
            setInputError((values) => ({
                ...values,
                lastName: "Please enter a last name!",
            }));
        }
        if (!details.course) {
            errors++;
            setInputError((values) => ({
                ...values,
                course: "Please enter your course!",
            }));
        }
        if (!details.batch) {
            errors++;
            setInputError((values) => ({
                ...values,
                batch: "Please enter your batch year!",
            }));
        }
        if (!details.school) {
            errors++;
            setInputError((values) => ({
                ...values,
                school: "Please enter your school acronym!",
            }));
        }
        if (!details.email) {
            errors++;
            setInputError((values) => ({
                ...values,
                email: "Please enter an email!",
            }));
        }
        if (details.email && !/\S+@\S+\.\S+/.test(details.email)) {
            errors++;
            setInputError((values) => ({
                ...values,
                email: "Please enter a valid email",
            }));
        }

        if (errors < 1) {
            const formData = new FormData();
            Object.entries(details).forEach(([key, value]) => {
                formData.append(key, value);
            });
            const signup = async () => {
                await axios
                    .post(
                        `http://localhost:2012/users/editprofile/${userid}`,
                        formData,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    )
                    .then(() => {
                        location.reload();
                    })
                    .catch((err) => {
                        if (err.status) {
                            setInputError((values) => ({
                                ...values,
                                username: "Username already taken!",
                            }));
                        }
                    });
            };

            signup();
        }
    };

    const handleFormInput = (event) => {
        const { name, value } = event.target;
        setDetails((values) => ({ ...values, [name]: value }));
    };

    return (
        <>
            <dialog id="edit_profile_modal" className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Edit Profile</h3>
                    <form
                        onSubmit={handleSubmit}
                        className=""
                        autoComplete="new-off"
                    >
                        <div className="flex flex-row gap-5 justify-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        First Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    name="firstName"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["firstName"]}
                                    onChange={(e) => {
                                        if (
                                            !/^[A-Za-z\s]*$/.test(
                                                e.target.value
                                            )
                                        )
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
                                    <span className="label-text">
                                        Middle Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your middle name"
                                    name="middleName"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["middleName"]}
                                    onChange={(e) => {
                                        if (
                                            !/^[A-Za-z\s]*$/.test(
                                                e.target.value
                                            )
                                        )
                                            return;
                                        if (e.target.value.length > 40) return;
                                        handleFormInput(e);
                                    }}
                                />
                                {inputError.middleName && (
                                    <span className="label-text text-error italic">
                                        {inputError.middleName}
                                    </span>
                                )}
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">
                                        Last Name
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    name="lastName"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["lastName"]}
                                    onChange={(e) => {
                                        if (
                                            !/^[A-Za-z\s]*$/.test(
                                                e.target.value
                                            )
                                        )
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
                        </div>
                        <div className="flex flex-row gap-5 justify-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Batch</span>
                                </div>
                                <input
                                    type="text"
                                    name="batch"
                                    placeholder="Enter your batch year (2010, 2011, etc.)"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["batch"]}
                                    onChange={(e) => {
                                        e.target.value = e.target.value.replace(
                                            /\s/g,
                                            ""
                                        );
                                        if (e.target.value.length > 4) return;
                                        handleFormInput(e);
                                    }}
                                />
                                {inputError.batch && (
                                    <span className="label-text text-error italic">
                                        {inputError.batch}
                                    </span>
                                )}
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">School</span>
                                </div>
                                <input
                                    type="text"
                                    name="school"
                                    placeholder="Enter your school (SABM, SEA, etc.)"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["school"]}
                                    onChange={(e) => {
                                        if (e.target.value.length > 20) return;
                                        handleFormInput(e);
                                    }}
                                />
                                {inputError.school && (
                                    <span className="label-text text-error italic">
                                        {inputError.school}
                                    </span>
                                )}
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Course</span>
                                </div>
                                <input
                                    type="text"
                                    name="course"
                                    placeholder="Enter your course (Ex. BSIT, BSN, etc.)"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["course"]}
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
                        </div>
                        <div className="flex flex-row gap-5 justify-center">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Company</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    name="company"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["company"]}
                                    onChange={(e) => {
                                        if (
                                            !/^[A-Za-z\s]*$/.test(
                                                e.target.value
                                            )
                                        )
                                            return;
                                        if (e.target.value.length > 50) return;
                                        handleFormInput(e);
                                    }}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    name="email"
                                    className="input input-bordered w-full max-w-xs"
                                    value={details["email"]}
                                    onChange={(e) => {
                                        if (
                                            !/^[A-Za-z\s]*$/.test(
                                                e.target.value
                                            )
                                        )
                                            return;
                                        if (e.target.value.length > 40) return;
                                        handleFormInput(e);
                                    }}
                                />
                                {inputError.email && (
                                    <span className="label-text text-error italic">
                                        {inputError.email}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="modal-action">
                            <input
                                type="submit"
                                className="btn btn-secondary"
                                value="Submit"
                            />
                            <form method="dialog">
                                <button className="btn">Cancel</button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default EditProfileModal;
