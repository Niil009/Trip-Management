import React from 'react';
import img1 from "../images/backImg1.jpg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img12 from "../images/img12.jpeg";
import img13 from "../images/img13.webp";
import img14 from "../images/img14.jpeg";
import img15 from "../images/img15.jpeg";
import img16 from "../images/img16.webp";
import img17 from "../images/img17.jpeg";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100%',
                }}
                className="flex items-center justify-center"
            >
                <div className="text-center p-6 md:p-12 lg:p-16  bg-opacity-80 rounded-lg  max-w-4xl mx-auto">
                    <h1 className="text-7xl  font-bold text-yellow-200">
                        VoyageVista
                    </h1>
                    <span className="block mt-4 text-lg md:text-2xl text-emerald-700 font-light">
                        Seamlessly Plan. Effortlessly Travel. Your Journey Starts Here
                    </span>
                    <p className="block mt-6 text-sm md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
                        Streamline your travel planning with our all-in-one site. Easily book accommodations, manage expenses, and craft detailed itineraries in one place. Whether it's a relaxing escape or an adventurous journey, we provide the tools to make your trip seamless and stress-free, ensuring you focus on enjoying every moment of your journey.
                    </p>
                </div>
            </div>

            {/* Offerings Section */}
            <div
                style={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'auto',
                    width: '100%',
                }}
                className="py-16"
            >
                <div className="bg-transparent p-6 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1: Trip Itinerary */}
                        <div className="bg-red-300 p-6 rounded-lg shadow-md hover:bg-red-400 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                            <img
                                src={img12}
                                alt="Trip Itinerary"
                                className="w-full h-32 md:h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Trip Itinerary</h3>
                            <p className="text-gray-700 text-center">
                                Organize your daily activities and explore every destination with ease.
                            </p>
                        </div>
                        {/* Card 2: Transportation */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                            <img
                                src={img14}
                                alt="Transportation"
                                className="w-full h-32 md:h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Transportation</h3>
                            <p className="text-gray-700 text-center">
                                Plan and manage all your travel logistics, from flights to local transport.
                            </p>
                        </div>
                        {/* Card 3: Accommodation */}
                        <div className="bg-lime-200 p-6 rounded-lg shadow-md hover:bg-lime-300 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                            <img
                                src={img15}
                                alt="Accommodation"
                                className="w-full h-32 md:h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Accommodation</h3>
                            <p className="text-gray-700 text-center">
                                Find and book the perfect places to stay for your trip.
                            </p>
                        </div>
                        {/* Card 4: Expense */}
                        <div className="bg-fuchsia-400 p-6 rounded-lg shadow-md hover:bg-fuchsia-500 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                            <img
                                src={img16}
                                alt="Expense"
                                className="w-full h-32 md:h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Expense</h3>
                            <p className="text-gray-700 text-center">
                                Keep track of your travel expenses and stay within budget.
                            </p>
                        </div>
                        {/* Card 5: Packing List */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                            <img
                                src={img17}
                                alt="Packing List"
                                className="w-full h-32 md:h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Packing List</h3>
                            <p className="text-gray-700 text-center">
                                Ensure you have everything you need before you leave home.
                            </p>
                        </div>
                        {/* Card 6: Additional Feature */}
                        <div className="bg-blue-400 p-6 rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center">
                            <img
                                src={img13}
                                alt="Additional Feature"
                                className="w-full h-32 md:h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">Additional Feature</h3>
                            <p className="text-gray-700 text-center">
                                Explore more tools and features to enhance your travel experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div
                style={{
                    backgroundImage: `url(${img12})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 'auto',
                    width: '100%',
                }}
                className="py-16"
            >
                <div className="relative bg-white bg-opacity-90 p-6 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-4xl mx-auto my-8 md:my-16">
                    <header className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Discover the Wonders of Indian Places
                        </h1>
                        <p className="text-sm md:text-base text-gray-600">Dibya Ranjan Sahu | September 15, 2024</p>
                    </header>
                    <article className="prose lg:prose-xl text-gray-700">
                        <p>
                            India is a land of incredible diversity, with its rich cultural heritage and stunning landscapes. From the majestic palaces of Rajasthan to the serene backwaters of Kerala, there is no shortage of breathtaking destinations to explore.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6">1. The Magnificent Forts of Rajasthan</h2>
                        <p>
                            Rajasthan, known as the Land of Kings, is home to some of the most stunning forts and palaces in India. The Amer Fort, Mehrangarh Fort, and City Palace in Udaipur are just a few examples of the architectural grandeur and historical significance of this region.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6">2. The Enchanting Backwaters of Kerala</h2>
                        <p>
                            Kerala, often referred to as "God's Own Country," offers a unique experience with its tranquil backwaters, lush greenery, and houseboat cruises. The serene beauty of Alleppey and Kumarakom is perfect for a relaxing getaway.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6">3. The Spiritual Heart of Varanasi</h2>
                        <p>
                            Varanasi, one of the oldest living cities in the world, holds immense spiritual significance. The ghats along the Ganges River, the bustling markets, and the ancient temples create an atmosphere that is both vibrant and sacred.
                        </p>
                        <p>
                            These are just a few of the many incredible places to visit in India. Each region offers its own unique experiences, making India a truly diverse and fascinating country to explore.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Home;
