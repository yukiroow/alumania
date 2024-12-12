// Author: @yukiroow Harry Dominguez
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * ErrorHero component that displays an error message and an option to refresh the page.
 * It shows a warning icon, a message about the error, and a button to reload the page.
 */
const ErrorHero = () => {
    return (
        <>
            <div>
                <section className="block m-auto w-2/5 mt-40">
                    <FontAwesomeIcon
                        icon={faCircleExclamation}
                        size="10x"
                        className="text-secondary"
                    />
                </section>
                <section>
                    <div className="block m-auto w-2/5">
                        <h1 className="text-7xl mt-5 mb-5 text-secondary font-semibold">
                            There was an error
                        </h1>
                        <p className="text-primary font-thin mb-2">
                            Can you try refreshing the page?
                        </p>
                        <p className="text-primary font-thin mb-2">
                            There might be something wrong with the magic engine
                        </p>
                        <p className="text-primary font-thin mb-6">
                            Contact Alumania HQ, if you&apos;d like.
                        </p>
                        <button
                            type="button"
                            className="btn btn-outline btn-primary"
                            onClick={() => window.location.reload(false)}
                        >
                            Refresh
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ErrorHero;
