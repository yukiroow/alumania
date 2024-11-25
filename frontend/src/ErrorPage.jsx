import React from "react";
import gif from "./assets/cat404.gif";

const ErrorPage = () => {
    return (
        <>
            <main>
                <section className="w-1/5 block">
                    <img src={gif} alt="Error 404" className="object-cover" />
                </section>
                <section>
                    <h1 className="text-7xl ">PAGE NOT FOUND</h1>
                    <p className="italic">
                        We looked everywhere for this page.
                    </p>
                    <p className="italic">
                        Are you sure you got the right URL?
                    </p>
                    <p className="italic">
                        Contact Alumania HQ, if you&apos;d like.
                    </p>
                </section>
                <button className="btn btn-outline btn-primary">
                    Back to Login
                </button>
            </main>
        </>
    );
};

export default ErrorPage;
