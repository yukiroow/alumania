// Author: @yukiroow Harry Dominguez
import axios from "axios";
import { useState } from "react";

const SponsorModal = ({ eventid, title }) => {
    const userId = localStorage.getItem("userid").replace(/['"]+/g, "");
    const [formData, setFormData] = useState({
        userid: userId,
        amount: "",
        type: "",
    });
    const [inputError, setInputError] = useState({
        amount: "",
        type: "",
    });

    const handleDropdownClick = () => {
        const menu = document.activeElement;
        if (menu) {
            menu.blur();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = 0;
        setInputError({
            amount: "",
            type: "",
        });

        if (!formData.type) {
            errors++;
            setInputError((values) => ({
                ...values,
                type: "Please select a sponsor type!",
            }));
        }

        // Validate amount
        const amountRegex = /\d*$/;
        if (!formData.amount || !amountRegex.test(formData.amount)) {
            errors++;
            setInputError((values) => ({
                ...values,
                amount: "Please enter a valid monetary amount!",
            }));
        }

        if (Number(formData.amount) > 2_147_483_647) {
            errors++;
            setInputError((values) => ({
                ...values,
                amount: "Maximum amount reached! (PHP 2,147,483,647)",
            }));
        }

        if (errors > 0) return;

        const sponsor = async () => {
            try {
                await axios.post(
                    `http://localhost:2012/events/sponsor/${eventid}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                alert(
                    "Thank you for your generous donation! We will be sending the next steps to your email!"
                );
                document.getElementById(`sponsor-${eventid}`).close();
            } catch (err) {
                console.error("Error submitting sponsor form:", err);
            }
        };

        sponsor();
    };

    return (
        <>
            <dialog id={`sponsor-${eventid}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">Sponsor {title}</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 justify-center items-center mt-5"
                    >
                        <div className="dropdown w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Type*</span>
                            </div>
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn w-full"
                            >
                                {formData["type"] || "Select"}
                            </div>
                            <ul
                                tabIndex={0}
                                name="type"
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                            >
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setFormData((values) => ({
                                            ...values,
                                            ["type"]: "Individual",
                                        }));
                                    }}
                                >
                                    <a>Individual</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setFormData((values) => ({
                                            ...values,
                                            ["type"]: "Business",
                                        }));
                                    }}
                                >
                                    <a>Business</a>
                                </li>
                                <li
                                    onClick={() => {
                                        handleDropdownClick();
                                        setFormData((values) => ({
                                            ...values,
                                            ["type"]: "Organization",
                                        }));
                                    }}
                                >
                                    <a>Organization</a>
                                </li>
                            </ul>
                            {inputError.type && (
                                <span className="label-text text-error italic">
                                    {inputError.type}
                                </span>
                            )}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Amount*</span>
                            </div>
                            <input
                                type="text"
                                name="amount"
                                placeholder="Amount in PHP"
                                className="input input- input-bordered w-full max-w-xs block mb-2"
                                min="0"
                                value={formData["amount"]}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (
                                        value === "" ||
                                        /^[1-9]\d*$/.test(value)
                                    ) {
                                        setFormData((prev) => ({
                                            ...prev,
                                            amount: value,
                                        }));
                                    }
                                }}
                            />
                            {inputError.amount && (
                                <span className="label-text text-error italic">
                                    {inputError.amount}
                                </span>
                            )}
                        </div>

                        <input
                            type="submit"
                            className="btn btn-secondary btn-wide"
                            value="Confirm"
                        />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default SponsorModal;
