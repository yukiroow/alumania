import "./App.css";
const App = () => {
    return (
        <>
            <div className="container ">

            </div>
            <h1>Login to Your Account</h1>
            <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-wide">Login</button>
        </>
    );
};

export default App;
