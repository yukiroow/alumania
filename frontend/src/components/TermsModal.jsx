import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck
} from "@fortawesome/free-solid-svg-icons";

const TermsModal = () => {
    return(
        <div>
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h2 className="font-bold text-xl mb-4 text-center">Alumania Terms And Conditions </h2>
                    <div className="px-4">
                        <h1 className="font-bold">Conditions</h1>
                        <p className="font-sans text-justify">
                            At Alumania, we are committed to providing a seamless and secure 
                            experiences for our users. This terms of service outlines 
                            the rules, responsibilities, and expectations while using 
                            our website and services. By accessing our website, you agree 
                            to comply with these Terms and Conditions, which govern your 
                            use of our services and outline your rights and responsibilities.
                        </p>
                        <h1 className="mt-5 font-bold">Data Collection</h1>
                        <p className="font-sans text-justify">
                            We respect your privacy, Alumania may collect and store the 
                            following types of data:
                        </p>
                            <div className="ml-5">
                                <p>• Name</p>
                                <p>• Email</p>
                                <p>• Employment</p>
                                <p>• Course</p>
                                <p>• Diploma</p>
                            </div>
                        <p className="font-sans text-justify">However, we are committed to 
                            protecting your data, and we take your privacy seriously. Please review our 
                            privacy policy to understand how we collect, use, and protect your 
                            information. The data we collect is used for several purposes, 
                            including to communicate with you, tailor our services to your profile, 
                            and improve your experience on our platform. We may also disclose your data 
                            when required by law such as in compliance with legal obligations to protect the 
                            rights, property, and safety of our users. 
                        </p>
                        <p className="mt-5 font-sans text-justify">Please review our privacy policy to understand 
                            how we collect, use, and protect your information. By using this website, you 
                            confirm that you have read, understood, and agreed to these Terms, as well as 
                            our Privacy Policy. If you have any questions or concerns about these 
                            Terms of Service, please reach out to us.
                        </p>
                        <p className="mt-5 font-sans text-justify font-bold">By using Alumania, you acknowledge 
                            that you have read, understood, and agree to these Terms of Service.
                        </p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button
                                class="mr-4 flex overflow-hidden w-[4.5rem] hover:w-[6.1rem] 
                                whitespace-nowrap gap-[9.5px] cursor-pointer bg-secondary 
                                text-white px-3 py-2 rounded-md transition-all ease-in-out 
                                hover:scale hover:scale-105 font-[revert] "
                                >
                                I agree
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="h-5 w-5 text-white"
                                />
                                </button>
                        </form>
                    </div>
            </div>
            </dialog>
        </div>
    );
};
export default TermsModal;