import { useSpring, animated } from '@react-spring/web';
import './HeroSection.css'




const HeroSection = () => {
    const springs = useSpring({
        from: { x: -400 },
        to: { x: 0 },
      })

    return (
        <section className="hero_section flex justify-center items-center max-[767.99px]:absolute max-[767.99px]:top-0 max-[767.99px]:-z-10 w-full max-[767.99px]:min-h-screen">

            <animated.div style={springs}>
                <div className="hero_content text-center text-white p-12 bg-slate-600 bg-opacity-25">
                    <h1 className='text-3xl'>Welcome To Visit Here</h1>
                    <p className='text-xl'>This is a single page website</p>
                </div>
            </animated.div>

      

        </section>
    );
};

export default HeroSection;