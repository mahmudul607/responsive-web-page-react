import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="hero_section flex justify-center items-center">
        <div className="hero_content text-center text-white p-12 bg-slate-600 bg-opacity-25">
            <h1 className='text-3xl'>Welcome To Visit Here</h1>
            <p className='text-xl'>This is a single page website</p>
        </div>
    </section>
    );
};

export default HeroSection;