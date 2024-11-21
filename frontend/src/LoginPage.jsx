import Logo from "./assets/logo.svg";
import BannerText from "./assets/banner-text.svg";
const LoginPage = () => {
    return (
        <>
            <div className="flex flex-row h-screen bg-primary">
                <div className="flex flex-col flex-1 mx-auto px-6 items-center rounded-tr-box rounded-br-box bg-base-100">
                    <Banner />
                    <h1 className="text-2xl text-gray-500 font-thin self-center my-3">
                        Login to Your Account
                    </h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input- input-bordered w-full max-w-xs block mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs block mt-2 mb-5"
                    />
                    <button className="btn btn-wide block btn-secondary">Login</button>
                </div>
                <div className="flex flex-col mx-auto items-center px-20">
                    <h1 className="text-3xl font-bold text-center mt-96 text-primary-content">
                        NEW HERE?
                    </h1>
                    <p className="text-xl font-thin text-center text-primary-content">
                        Create your Account Now
                    </p>
                    <button className="btn btn-wide mt-6">Sign-up</button>
                </div>
            </div>
        </>
    );
};

const Banner = () => {
    return (
        <>
            <div className="flex flex-row self-center mt-60 mb-28">
                <img src={Logo} alt="Alumania Logo" className="w-36" />
                <img src={BannerText} alt="Alumania Text name" className="w-80" />
            </div>
        </>
    );
};

export default LoginPage;
