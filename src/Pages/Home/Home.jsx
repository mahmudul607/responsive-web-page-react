import CardSection from "../CardSection/CardSection";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div >
            
           <div className=" max-[767.99px]:min-h-screen relative "> 
            <Navbar></Navbar>
           <HeroSection></HeroSection>
           </div>
           
            <CardSection></CardSection>

           
          
            
        </div>
    );
};

export default Home;