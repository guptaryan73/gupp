import logo from '../images/logo.png';

function Navbar() {
    return (
        <div className="bg-yellow-500 flex justify-between items-center p-4">
            <img src={logo} alt="Logo" className="max-w-[100px]" />
            <span className="text-4xl font-bold uppercase">Dive into the Gupp!</span>
            <span className="font-extrabold mr-5">Account</span>
        </div>
    );
}

export default Navbar;
