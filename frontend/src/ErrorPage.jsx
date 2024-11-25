import React from "react";
import gif from "./assets/cat404.gif";

const ErrorPage = () => {
    return (
        <>
            <main>
                <section className="block m-auto w-2/5 mt-36">
                    <img src={gif} alt="Error 404" className="rounded-lg" />
                </section>
                <section>
                    <div className="block m-auto w-2/5">
                        <h1 className="text-7xl mt-5 mb-5 text-secondary font-semibold">PAGE NOT FOUND</h1>
                        <p className="text-primary font-thin mb-2">
                            We looked everywhere for this page.
                        </p>
                        <p className="text-primary font-thin mb-2">
                            Are you sure you got the right URL?
                        </p>
                        <p className="text-primary font-thin mb-6">
                            Contact Alumania HQ, if you&apos;d like.
                        </p>
                        <button className="btn btn-outline btn-primary">
                            Back to Login
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ErrorPage;
