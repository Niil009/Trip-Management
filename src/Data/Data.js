import img1 from "../images/Odisha19.jpeg";
import img2 from "../images/Karnat20.jpeg";
import img3 from "../images/Kerela21.jpeg";
import img4 from "../images/Kolkata27.jpeg";
import img5 from "../images/mumb24.jpeg";
import img6 from "../images/andhra25.jpeg";
import img7 from "../images/him26.jpeg";
import img8 from "../images/gj26.jpeg";
import img9 from "../images/delhi23.webp";
import flight_img from "../images/flight.webp";
import car from "../images/taxiImage.jpeg";
import bus_img from "../images/bus.webp";
import train from "../images/train.jpeg";
import homstay_img from "../images/homesaty.jpeg";
import hotel_img from "../images/Hotel.webp";
import pg_img from "../images/pg.webp";
export const data = [
  {
    sName: "Karnataka",
    about:
      "Explore Karnataka: Home to the majestic Hampi ruins, lush coffee plantations, and vibrant cultural heritage.",
    image: img2,
    id: 1,
  },
  {
    sName: "Odisha",
    about:
      "Discover Odisha: Known for its stunning temples, beautiful beaches, and vibrant tribal culture.",
    image: img1,
    id: 2,
  },
  {
    sName: "Andhra Pradesh",
    about:
      "Uncover Andhra Pradesh: A blend of historic temples, rich cuisine, and scenic coastal landscapes.",
    image: img6,
    id: 3,
  },
  {
    sName: "Kerala",
    about:
      "Experience Kerala: Renowned for its serene backwaters, lush green landscapes, and Ayurvedic wellness retreats.",
    image: img3,
    id: 4,
  },
  {
    sName: "Gujurat",
    about:
      "Explore Gujarat: Famous for its vibrant festivals, historic sites, and diverse wildlife.",
    image: img8,
    id: 5,
  },
  {
    sName: "Kolkata",
    about:
      "Discover Kolkata: The cultural capital of India, known for its colonial architecture, literary heritage, and vibrant arts scene.",
    image: img4,
    id: 6,
  },
  {
    sName: "Delhi",
    about:
      "Experience Delhi: The bustling capital city, a rich tapestry of history, culture, and modernity.",
    image: img9,
    id: 7,
  },
  {
    sName: "Mumbai",
    about:
      "Explore Mumbai: The city that never sleeps, known for its dynamic film industry, bustling markets, and iconic landmarks.",
    image: img5,
    id: 8,
  },
  {
    sName: "Himachal Pradesh",
    about:
      "Discover Himachal Pradesh: A paradise for nature lovers with its majestic mountains, serene valleys, and adventure sports.",
    image: img7,
    id: 9,
  },
];

export const TripList = [
  {
    sName: "Karnataka",
    tripId: "2",
    tripName: "Karnataka Wonders",
    bgImg: img1, 
    placeList: [
      {
        sName: "Bengaluru",
        about:
          "Explore Bengaluru: The Silicon Valley of India, renowned for its vibrant tech scene, lush gardens, and lively nightlife.",
        image: img2, // Assuming a new image for Bengaluru
        id: 1,
      },
      {
        sName: "Mysuru",
        about:
          "Discover Mysuru: Famous for its royal heritage, stunning palaces, and the grand Dasara festival.",
        image: img3, // Assuming a new image for Mysuru
        id: 2,
      },
      {
        sName: "Hampi",
        about:
          "Uncover Hampi: A UNESCO World Heritage site known for its impressive ruins and historical architecture amidst picturesque landscapes.",
        image: img4, // Assuming a new image for Hampi
        id: 3,
      },
      {
        sName: "Coorg",
        about:
          "Experience Coorg: Known as the Scotland of India, it offers lush coffee plantations, scenic hills, and rich cultural heritage.",
        image: img5, // Assuming a new image for Coorg
        id: 4,
      },
      {
        sName: "Gokarna",
        about:
          "Relax in Gokarna: A serene coastal town famous for its beautiful beaches and ancient temples.",
        image: img6, // Assuming a new image for Gokarna
        id: 5,
      },
      {
        sName: "Badami",
        about:
          "Explore Badami: Home to ancient rock-cut temples and a rich history that reflects Karnataka’s architectural splendor.",
        image: img7, // Assuming a new image for Badami
        id: 6,
      },
    ],
  },

  {
    sName: "Odisha",
    tripId: "3",
    tripName: "Odisha Treasures",
    bgImg: img1, // Assuming a new image for Odisha
    placeList: [
      {
        sName: "Bhubaneswar",
        about:
          "Discover Bhubaneswar: The capital city known for its ancient temples, rich cultural heritage, and modern urban developments.",
        image: img1, // Assuming a new image for Bhubaneswar
        id: 1,
      },
      {
        sName: "Puri",
        about:
          "Experience Puri: Famous for its Jagannath Temple, beautiful beaches, and vibrant annual Rath Yatra festival.",
        image: img2, // Assuming a new image for Puri
        id: 2,
      },
      {
        sName: "Konark",
        about:
          "Uncover Konark: Home to the stunning Sun Temple, an architectural marvel and a UNESCO World Heritage site.",
        image: img3, // Assuming a new image for Konark
        id: 3,
      },
      {
        sName: "Cuttack",
        about:
          "Explore Cuttack: Known for its historic landmarks, vibrant bazaars, and the famous Barabati Fort.",
        image: img4, // Assuming a new image for Cuttack
        id: 4,
      },
      {
        sName: "Chilika Lake",
        about:
          "Discover Chilika Lake: Asia's largest brackish water lagoon, known for its migratory birds and scenic boat rides.",
        image: img5, // Assuming a new image for Chilika Lake
        id: 5,
      },
      {
        sName: "Rourkela",
        about:
          "Experience Rourkela: An industrial city with beautiful parks, temples, and the serene Mandira Dam.",
        image: img6, // Assuming a new image for Rourkela
        id: 6,
      },
    ],
  },
  {
    tripId: "4",
    sName: "Andhra Pradesh",
    bgImg: img6, // Assuming a new image for Andhra Pradesh
    placeList: [
      {
        sName: "Visakhapatnam",
        about:
          "Experience Visakhapatnam: A coastal city known for its beautiful beaches, lush hills, and vibrant port life.",
        image: img2, // Assuming a new image for Visakhapatnam
        id: 1,
      },
      {
        sName: "Tirupati",
        about:
          "Discover Tirupati: Famous for the sacred Tirumala Venkateswara Temple, a significant pilgrimage site.",
        image: img3, // Assuming a new image for Tirupati
        id: 2,
      },
      {
        sName: "Amaravati",
        about:
          "Uncover Amaravati: The ancient city with historic Buddhist sites and the new capital region’s modern developments.",
        image: img4, // Assuming a new image for Amaravati
        id: 3,
      },
      {
        sName: "Hampi",
        about:
          "Explore Hampi: A UNESCO World Heritage site known for its remarkable ruins and historical architecture.",
        image: img5, // Assuming a new image for Hampi
        id: 4,
      },
      {
        sName: "Vijayawada",
        about:
          "Experience Vijayawada: Known for its bustling markets, historical temples, and the scenic Krishna River.",
        image: img6, // Assuming a new image for Vijayawada
        id: 5,
      },
      {
        sName: "Kadapa",
        about:
          "Discover Kadapa: Home to ancient temples, natural caves, and a gateway to the scenic hills of the Eastern Ghats.",
        image: img7, // Assuming a new image for Kadapa
        id: 6,
      },
    ],
  },
  {
    tripId: "5",
    sName: "Gujurat",
    bgImg: img8, // Assuming a new image for Gujarat
    placeList: [
      {
        sName: "Ahmedabad",
        about:
          "Discover Ahmedabad: A vibrant city known for its rich history, vibrant street markets, and modern architecture.",
        image: img1, // Assuming a new image for Ahmedabad
        id: 1,
      },
      {
        sName: "Gir National Park",
        about:
          "Experience Gir National Park: Home to the Asiatic lion, this park offers rich wildlife experiences and scenic landscapes.",
        image: img2, // Assuming a new image for Gir National Park
        id: 2,
      },
      {
        sName: "Rann of Kutch",
        about:
          "Uncover the Rann of Kutch: Famous for its expansive salt flats, unique landscapes, and the Rann Utsav festival.",
        image: img3, // Assuming a new image for Rann of Kutch
        id: 3,
      },
      {
        sName: "Vadodara",
        about:
          "Explore Vadodara: Known for its grand architecture, vibrant culture, and the majestic Lakshmi Vilas Palace.",
        image: img4, // Assuming a new image for Vadodara
        id: 4,
      },
      {
        sName: "Somnath",
        about:
          "Discover Somnath: Known for the historic Somnath Temple, a revered pilgrimage site with rich historical significance.",
        image: img5, // Assuming a new image for Somnath
        id: 5,
      },
      {
        sName: "Dwarka",
        about:
          "Experience Dwarka: An ancient city with sacred temples and a rich connection to Hindu mythology.",
        image: img6, // Assuming a new image for Dwarka
        id: 6,
      },
    ],
  },
  {
    tripId: "6",
    sName: "Mumbai",
    tripName: "Mumbai Marvels",
    bgImg: img5, // Assuming a new image for Mumbai
    placeList: [
      {
        sName: "South Mumbai",
        about:
          "Discover South Mumbai: Home to iconic landmarks like the Gateway of India, Marine Drive, and historic architecture.",
        image: img3, // Assuming a new image for South Mumbai
        id: 1,
      },
      {
        sName: "Bandra",
        about:
          "Experience Bandra: Known for its trendy shopping streets, lively cafes, and the Bandra-Worli Sea Link.",
        image: img5, // Assuming a new image for Bandra
        id: 2,
      },
      {
        sName: "Colaba",
        about:
          "Uncover Colaba: Famous for its bustling markets, historical sites, and the iconic Taj Mahal Palace Hotel.",
        image: img6, // Assuming a new image for Colaba
        id: 3,
      },
      {
        sName: "Juhu",
        about:
          "Relax in Juhu: Known for its vibrant beach, luxury hotels, and famous eateries.",
        image: img7, // Assuming a new image for Juhu
        id: 4,
      },
      {
        sName: "Andheri",
        about:
          "Discover Andheri: A lively area known for its entertainment hubs, shopping complexes, and suburban charm.",
        image: img8, // Assuming a new image for Andheri
        id: 5,
      },
      {
        sName: "Malad",
        about:
          "Experience Malad: Known for its bustling markets, cultural events, and suburban residential areas.",
        image: img9, // Assuming a new image for Malad
        id: 6,
      },
    ],
  },
  {
    tripId: "7",
    sName: "Delhi",
    tripName: "Delhi Discoveries",
    bgImg: img9, // Assuming a new image for Delhi
    placeList: [
      {
        sName: "Old Delhi",
        about:
          "Experience Old Delhi: A historic area known for its bustling bazaars, Mughal architecture, and street food.",
        image: img9, // Assuming a new image for Old Delhi
        id: 1,
      },
      {
        sName: "New Delhi",
        about:
          "Discover New Delhi: The modern part of the city with landmarks like India Gate, Rajpath, and Lutyens' architecture.",
        image: img6, // Assuming a new image for New Delhi
        id: 2,
      },
      {
        sName: "Qutub Minar",
        about:
          "Uncover Qutub Minar: A UNESCO World Heritage site, this ancient tower is an architectural marvel.",
        image: img1, // Assuming a new image for Qutub Minar
        id: 3,
      },
      {
        sName: "Humayun's Tomb",
        about:
          "Explore Humayun's Tomb: A beautifully preserved Mughal garden tomb and a precursor to the Taj Mahal.",
        image: img2, // Assuming a new image for Humayun's Tomb
        id: 4,
      },
      {
        sName: "Lotus Temple",
        about:
          "Discover Lotus Temple: A stunning Bahá'í House of Worship known for its unique lotus-shaped architecture.",
        image: img3, // Assuming a new image for Lotus Temple
        id: 5,
      },
      {
        sName: "Red Fort",
        about:
          "Experience Red Fort: A historic fortification with impressive Mughal architecture and a significant cultural heritage.",
        image: img4, // Assuming a new image for Red Fort
        id: 6,
      },
    ],
  },
  {
    tripId: "8",
    sName: "Himachal Pradesh",
    tripName: "Himachal Pradesh Escapes",
    bgImg: img7, // Assuming a new image for Himachal Pradesh
    placeList: [
      {
        sName: "Shimla",
        about:
          "Discover Shimla: The capital city known for its colonial architecture, scenic views, and pleasant weather.",
        image: img4, // Assuming a new image for Shimla
        id: 1,
      },
      {
        sName: "Manali",
        about:
          "Experience Manali: A popular hill station known for its adventure sports, scenic beauty, and vibrant local culture.",
        image: img5, // Assuming a new image for Manali
        id: 2,
      },
      {
        sName: "Dharamshala",
        about:
          "Uncover Dharamshala: Known for its Tibetan culture, monasteries, and stunning views of the Dhauladhar mountains.",
        image: img6, // Assuming a new image for Dharamshala
        id: 3,
      },
      {
        sName: "Spiti Valley",
        about:
          "Explore Spiti Valley: A remote, high-altitude desert known for its dramatic landscapes, monasteries, and trekking opportunities.",
        image: img7, // Assuming a new image for Spiti Valley
        id: 4,
      },
      {
        sName: "Kasauli",
        about:
          "Experience Kasauli: A quaint hill station known for its serene environment, colonial charm, and scenic views.",
        image: img8, // Assuming a new image for Kasauli
        id: 5,
      },
      {
        sName: "Palampur",
        about:
          "Discover Palampur: Renowned for its tea gardens, beautiful landscapes, and pleasant climate.",
        image: img9, // Assuming a new image for Palampur
        id: 6,
      },
    ],
  },
  {
    tripId: "9",
    sName: "Kolkata",
    tripName: "Kolkata",
    bgImg: img4, // Assuming a new image for Kolkata
    placeList: [
      {
        sName: "Victoria Memorial",
        about:
          "Discover Victoria Memorial: An iconic landmark showcasing British colonial architecture and beautiful gardens.",
        image: img9, // Assuming a new image for Victoria Memorial
        id: 1,
      },
      {
        sName: "Howrah Bridge",
        about:
          "Experience Howrah Bridge: A historic bridge offering stunning views of the Hooghly River and bustling city life.",
        image: img5, // Assuming a new image for Howrah Bridge
        id: 2,
      },
      {
        sName: "Indian Museum",
        about:
          "Uncover Indian Museum: The oldest and largest museum in India, housing a vast collection of art, artifacts, and natural history exhibits.",
        image: img1, // Assuming a new image for Indian Museum
        id: 3,
      },
      {
        sName: "Kalighat Temple",
        about:
          "Explore Kalighat Temple: A significant Hindu temple dedicated to the goddess Kali, known for its spiritual ambiance.",
        image: img2, // Assuming a new image for Kalighat Temple
        id: 4,
      },
      {
        sName: "Eden Gardens",
        about:
          "Experience Eden Gardens: A historic cricket stadium known for its large capacity and iconic matches.",
        image: img3, // Assuming a new image for Eden Gardens
        id: 5,
      },
      {
        sName: "Marble Palace",
        about:
          "Discover Marble Palace: An exquisite mansion showcasing an impressive collection of art and antique furniture.",
        image: img4, // Assuming a new image for Marble Palace
        id: 6,
      },
    ],
  },
  {
    tripId: "10",
    sName: "Kerala",
    tripName: "Kerala Serenity",
    bgImg: img3, // Assuming a new image for Kerala
    placeList: [
      {
        sName: "Alleppey",
        about:
          "Experience Alleppey: Famous for its backwaters, houseboat cruises, and picturesque canals.",
        image: img4, // Assuming a new image for Alleppey
        id: 1,
      },
      {
        sName: "Kochi",
        about:
          "Discover Kochi: A vibrant port city known for its historical forts, eclectic architecture, and artistic heritage.",
        image: img5, // Assuming a new image for Kochi
        id: 2,
      },
      {
        sName: "Munnar",
        about:
          "Uncover Munnar: A charming hill station renowned for its tea plantations, lush green landscapes, and cool climate.",
        image: img6, // Assuming a new image for Munnar
        id: 3,
      },
      {
        sName: "Wayanad",
        about:
          "Explore Wayanad: Known for its wildlife sanctuaries, scenic waterfalls, and rich biodiversity.",
        image: img7, // Assuming a new image for Wayanad
        id: 4,
      },
      {
        sName: "Kumarakom",
        about:
          "Experience Kumarakom: A serene backwater destination with luxurious houseboats and beautiful bird sanctuaries.",
        image: img8, // Assuming a new image for Kumarakom
        id: 5,
      },
      {
        sName: "Varkala",
        about:
          "Discover Varkala: Known for its stunning cliffs, serene beaches, and vibrant local culture.",
        image: img9, // Assuming a new image for Varkala
        id: 6,
      },
    ],
  },
];
export const transport = [
  {
    id: 1,
    mode: "Car",
    image: car,
    title: "Private Car",
    caption:
      "A convenient and flexible mode of transportation, ideal for personal use and short trips.",
  },
  {
    id: 2,
    mode: "Bus",
    image: bus_img,
    title: "Public Bus",
    caption:
      "An affordable and widely accessible option for city and intercity travel.",
  },
  {
    id: 3,
    mode: "Train",
    image: train,
    title: "Train",
    caption:
      "A reliable and scenic option for longer journeys, offering comfort and efficiency.",
  },
  {
    id: 4,
    mode: "Flight",
    image: flight_img,
    title: "Airplane",
    caption:
      "The fastest mode of long-distance travel, perfect for crossing cities or countries.",
  },
];
export const accommodation = [
  {
    type: "PG",
    name: "Comfort PG",
    image: pg_img,
    price: 500, // Price per month
    location: "Downtown",
    amenities: ["WiFi", "Laundry", "Meals"],
  },
  {
    type: "Homestay",
    name: "Sunny Homestay",
    image: homstay_img,
    price: 3000, // Price per month
    location: "Suburb",
    amenities: ["WiFi", "Breakfast", "Kitchen Access"],
  },
  {
    type: "Hotel Room",
    name: "Luxury Inn",
    image: hotel_img,
    price: 1000, // Price per night
    location: "City Center",
    amenities: ["WiFi", "Room Service", "Gym Access"],
  },
];

export const demoPrices = {
  flights: [
      { id: 1, airline: 'Air Demo', amount: 300, reference: 'FL123', departureTime: '2024-10-01T10:00', arrivalTime: '2024-10-01T14:00' },
      { id: 2, airline: 'Sky Demo', amount: 450, reference: 'FL456', departureTime: '2024-10-05T16:00', arrivalTime: '2024-10-05T20:00' },
  ],
  taxis: [
      { id: 1, amount: 30, reference: 'TX123', departureTime: '2024-10-02T08:00', arrivalTime: '2024-10-02T08:30' },
      { id: 2, amount: 50, reference: 'TX456', departureTime: '2024-10-03T09:00', arrivalTime: '2024-10-03T09:30' },
  ],
  buses: [
      { id: 1, amount: 20, reference: 'BS123', departureTime: '2024-10-04T11:00', arrivalTime: '2024-10-04T13:00' },
      { id: 2, amount: 25, reference: 'BS456', departureTime: '2024-10-06T15:00', arrivalTime: '2024-10-06T17:00' },
  ]
};

