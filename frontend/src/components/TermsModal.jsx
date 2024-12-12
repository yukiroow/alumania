// Author: @yukiroow Harry Dominguez
/**
 * This is a popup modal that displays the Terms and Conditions of the Application
 */
const TermsModal = () => {
    return (
        <>
            <dialog id="terms_modal" className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h2 className="font-bold text-xl mb-4 text-center">
                        Alumania Terms And Conditions
                    </h2>
                    <div className="px-4">
                        <h1 className="font-bold">Conditions</h1>
                        <p className="font-sans text-justify">
                            At Alumania, we are committed to providing a
                            seamless and secure experience for our users. These
                            Terms of Service outline the rules,
                            responsibilities, and expectations while using our
                            website and services. By accessing our website, you
                            agree to comply with these Terms and Conditions,
                            which govern your use of our services and outline
                            your rights and responsibilities.
                        </p>
                        <h1 className="mt-5 font-bold">
                            Data Collection and Privacy
                        </h1>
                        <p className="font-sans text-justify">
                            In compliance with the Data Privacy Act of 2012
                            (DPA), Alumania ensures that your personal data is
                            collected, processed, and stored in a lawful and
                            transparent manner. By using our platform, you
                            consent to the collection and processing of the
                            following types of personal data:
                        </p>
                        <div className="ml-5">
                            <p>• Name</p>
                            <p>• Email</p>
                            <p>• Employment</p>
                            <p>• Course</p>
                            <p>• Diploma</p>
                        </div>
                        <p className="font-sans text-justify">
                            The data collected is used to communicate with you,
                            tailor our services to your profile, and improve
                            your experience on our platform. We also ensure that
                            appropriate organizational, physical, and technical
                            security measures are in place to protect your data
                            against unauthorized access, use, or disclosure.
                        </p>
                        <h1 className="mt-5 font-bold">Your Rights</h1>
                        <p className="font-sans text-justify">
                            Under the Data Privacy Act of 2012, you have the
                            following rights:
                        </p>
                        <div className="ml-5">
                            <p>
                                • The right to be informed about how your data
                                is collected and processed.
                            </p>
                            <p>• The right to access your personal data.</p>
                            <p>
                                • The right to correct or update inaccurate or
                                incomplete data.
                            </p>
                            <p>
                                • The right to object to the processing of your
                                data in certain circumstances.
                            </p>
                            <p>• The right to withdraw consent at any time.</p>
                            <p>
                                • The right to lodge a complaint with the
                                National Privacy Commission.
                            </p>
                        </div>
                        <h1 className="mt-5 font-bold">Data Disclosure</h1>
                        <p className="font-sans text-justify">
                            Alumania may disclose your data when required by law
                            or in compliance with legal obligations. This
                            includes protecting the rights, property, and safety
                            of our users. Any data sharing with third parties
                            will be done only with your explicit consent or as
                            required by applicable laws and regulations.
                        </p>
                        <h1 className="mt-5 font-bold">Consent</h1>
                        <p className="font-sans text-justify">
                            By using this website, you confirm that you have
                            read, understood, and agreed to these Terms and our
                            Privacy Policy, including the processing of your
                            personal data in accordance with the Data Privacy
                            Act of 2012. If you do not agree with any of these
                            terms, please discontinue using our services.
                        </p>
                        <p className="mt-5 font-sans text-justify font-bold">
                            If you have any questions or concerns about these
                            Terms of Service, or wish to exercise your rights
                            under the Data Privacy Act of 2012, please reach out
                            to us at{" "}
                            <span className="text-secondary italic underline">
                                alumania2600@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default TermsModal;
