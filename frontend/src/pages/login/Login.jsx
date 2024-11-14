import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [paasword, setPaasword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, paasword);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <h1 className='text-3xl text-center font-semibold text-gray-300'>
                    Login
                    <span className='text-green-800'> EvergreenTalks</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-bold'>Username</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text font-bold'>Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" value={paasword} onChange={(e) => setPaasword(e.target.value)} />
                    </div>
                    <Link to="/signup" className='text-sm hero: underline hover:text-green-600 mt-2 inline-block '>Don't have an Account?</Link>
                    <div>
                        <button className="btn btn-success btn-block text-white h-2 bg-green-600 mt-2" disabled={loading}>
                            {loading ? <span className='loading loading-spinner '></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;

// Starter Code
// import React from 'react';

// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className="w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
//                 <h1 className='text-3xl text-center font-semibold text-gray-300'>
//                     Login
//                     <span className='text-green-800'>EvergreenTalks</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text font-bold'>Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter Username" className="input input-bordered w-full max-w-xs" />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text font-bold'>Password</span>
//                         </label>
//                         <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
//                     </div>
//                     <a href='#' className='text-sm hero: underline hover:text-green-600 mt-2 inline-block '>Don't have an Account?</a>
//                 </form>
//                 <button className="btn btn-success btn-block text-white h-2 bg-green-600 mt-2">Login</button>
//             </div>
//         </div>
//     )
// }

// export default Login;