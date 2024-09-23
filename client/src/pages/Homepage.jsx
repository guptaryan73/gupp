import PostCard from "../components/PostCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Homepage() {
    return (
        <div className="bg-zinc-950	 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
            <Navbar/>
            <div className="text-4xl p-4">
                <PostCard />
            </div>
            <Footer/>
        </div>

    );
}

export default Homepage;
