import TagsSection from "../../../Shared/TagsSection";
import Banner from "./Banner/Banner";
import LodePost from "./LodePost/LodePost";


const Home = () => {
    return (
        <div className="flex">
            <div className="bg-gray-200 w-[20%] h-screen">1</div>
            <div className="flex-grow w-[60%]">
                <Banner/>
                <TagsSection/>
                <LodePost></LodePost>
            </div>
            <div className="bg-gray-200 w-[20%] h-screen">3</div>
        </div>
    );
};

export default Home;