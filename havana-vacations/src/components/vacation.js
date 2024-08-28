export default function Vacation({ data }) {
    return (<div>
        <img src={data.image} width="100px" />
        <p>likes: {data.likes}</p>
        <p>description: {data.description}</p>
        <p>date: {data.date}</p>
        <p>location: {data.location}</p>
        <p>price: {data.price}</p>
    </div>)
}