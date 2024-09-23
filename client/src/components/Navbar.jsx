import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth'
import logo from '../assets/images/logo.png';

function Navbar() {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth()


    return (
        <div className="bg-yellow-500 flex justify-between items-center p-4">
            <img src={logo} alt="Logo" className="max-w-[100px]" />
            <span className="text-4xl font-bold uppercase">Dive into the Gupp!</span>
            {userLoggedIn && (
                <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className="font-extrabold mr-5">
                    Gupp Out!
                </button>
            )}

            {!userLoggedIn && (
                <button>Login Kar bhadwe!</button>
            )}



        </div>
    );
}

export default Navbar;
