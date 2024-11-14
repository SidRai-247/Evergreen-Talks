import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();//Why do we need this?
    //directly useContext would've been better
    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            })

            const data = res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            //Clear local storaeg
            localStorage.clear("chat-user");
            setAuthUser(null);
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    return { loading, logout };

}

export default useLogout;