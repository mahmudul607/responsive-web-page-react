const CardSection = () => {
    return (
        <section className="cards_section grid grid-cols-1 sm-[767.99px]:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4 relative -top-8">
        <div className="card  text-center rounded-md p-2 bg-white shadow-lg">
            <img className="w-full h-auto  rounded-md" src="./images/1.jpeg" alt="card-img"/>
            <h2>image-1</h2>
            <p>image details</p>
        </div>
        <div className="card text-center rounded-md p-2 bg-white shadow-lg">
            <img className="w-full h-auto  rounded-md" src="./images/2.webp" alt="card-img"/>
            <h2>image-2</h2>
            <p>image details</p>
        </div>
        <div className="card text-center rounded-md p-2 bg-white shadow-lg">
            <img className="w-full h-auto  rounded-md" src="./images/3.jpg" alt="card-img"/>
            <h2>image-3</h2>
            <p>image details</p>
        </div>
        <div className="card text-center rounded-md p-2 bg-white shadow-lg">
            <img className="w-full h-auto  rounded-md" src="./images/4.jfif" alt="card-img"/>
            <h2>image-4</h2>
            <p>image details</p>
        </div>
    </section>
    );
};

export default CardSection;