import ProfileCarousel from "../../components/autoscrollcards";
// import RoundedButton from "../../components/roundedbutton";
import "./index.css";
import CardsSection from "../../components/cardsSection";
import YellowSection from "../../components/yellowSection";
import { withHeaderFooter } from "../../hoc";


const HomePage = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="rounded-3xl px-5 py-1.5 bg-color-change animate-color-change mt-24 text-center mx-10">
                    <p className="text-gray-800 font-semibold">Over 3 million ready-to-work creatives!</p>
                </div>
                <div className="flex flex-col items-center mt-10 font-[525] text-center mx-10 heading">
                    <h1 className="text-5xl md:text-7xl tracking-wider">The world's destination</h1>
                    <h1 className="text-5xl md:text-7xl tracking-wider">for design</h1>
                </div>
                <p className="mx-10 mt-10 text-lg md:text-xl text-center">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
                <div className="mt-10 text-sm flex justify-center mx-10">
                    <button className={`font-[525] p-4 bg-black text-white border-none rounded-full w-32 hover:opacity-60`}>{"Get started"}</button>
                </div>
            </div>
            <ProfileCarousel/>
            <CardsSection/>
            <YellowSection/>
        </>
    )
}

const Home = withHeaderFooter(HomePage);

export default Home;