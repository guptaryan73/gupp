import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import logo from '../assets/images/logo.png';

function Navbar() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setIsAuthenticated(!!session);
        };

        fetchSession();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem('authToken'); // Make sure to remove the correct token
        setIsAuthenticated(false); // Update the state
        navigate('/sign-in');
    };

    return (
        <div className="bg-yellow-500 flex justify-between items-center p-4">
            <img src={logo} alt="Logo" className="max-w-[100px]" />
            <span className="text-4xl font-bold uppercase">Dive into the Gupp!</span>
            {isAuthenticated && (
                <button onClick={handleSignOut} className="font-extrabold mr-5">
                    Gupp Out!
                </button>
            )}

            {!isAuthenticated && (
                <button>Login Kar bhadwe!</button>
            )}



        </div>
    );
}

export default Navbar;
