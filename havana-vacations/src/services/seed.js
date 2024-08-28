import { apiPost } from "./axios-api";

export async function seedVacations() {
    const vacations = [
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 150,
            description: "Relaxing beach vacation in the Maldives with crystal-clear waters and white sand beaches.",
            date: "2024-09-01",
            location: "Maldives",
            price: "$3,000"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 220,
            description: "Adventure trip to the Swiss Alps, including hiking, skiing, and breathtaking mountain views.",
            date: "2024-12-15",
            location: "Swiss Alps",
            price: "$2,500"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 180,
            description: "Cultural exploration of Kyoto, Japan, featuring historic temples, gardens, and traditional tea ceremonies.",
            date: "2024-10-10",
            location: "Kyoto, Japan",
            price: "$1,800"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 300,
            description: "Luxury safari in Kenya, with wildlife viewing, guided tours, and stays in exclusive lodges.",
            date: "2024-11-05",
            location: "Kenya",
            price: "$4,200"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 275,
            description: "Romantic getaway to Santorini, Greece, with sunset views, private villas, and wine tasting.",
            date: "2024-09-20",
            location: "Santorini, Greece",
            price: "$2,800"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 310,
            description: "Road trip through the scenic landscapes of New Zealand, covering both the North and South Islands.",
            date: "2025-01-12",
            location: "New Zealand",
            price: "$3,500"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 190,
            description: "City break in Paris, France, with visits to iconic landmarks like the Eiffel Tower and Louvre Museum.",
            date: "2024-09-30",
            location: "Paris, France",
            price: "$2,000"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 240,
            description: "Explore the natural beauty of Iceland, including waterfalls, geysers, and the Northern Lights.",
            date: "2024-11-20",
            location: "Iceland",
            price: "$3,200"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 200,
            description: "Island hopping adventure in Thailand, visiting Phuket, Koh Phi Phi, and Krabi.",
            date: "2024-10-25",
            location: "Thailand",
            price: "$2,400"
        },
        {
            image: "https://via.placeholder.com/600/92c952",
            likes: 260,
            description: "Cultural and historical tour of Rome, Italy, exploring ancient ruins, the Vatican, and Italian cuisine.",
            date: "2024-09-15",
            location: "Rome, Italy",
            price: "$2,200"
        }
    ];


    const response = await apiPost("vacations", vacations)
    console.log(response)

}