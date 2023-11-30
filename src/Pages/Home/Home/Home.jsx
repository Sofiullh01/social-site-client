import TagsSection from "../../../Shared/TagsSection";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="flex">
            <div className="bg-gray-200 w-[20%] h-screen">1</div>
            <div className="flex-grow w-[60%] h-screen bg-blue-500">
                <Banner/>
                <TagsSection/>
            </div>
            <div className="bg-gray-200 w-[20%] h-screen">3</div>
        </div>
    );
};

export default Home;