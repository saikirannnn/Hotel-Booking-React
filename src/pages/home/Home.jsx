import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import "./home.css";

export default function Home(){
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse my property here</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};
