export default function Carousel({title,  cardlist}){

    const card = cardlist.map(card=> {
        return <div className="card">
            <img src="" alt="" className="img-card" />
            <p>Title</p>
        </div>
    })
    return <>
    <h1>Carousel</h1>
    </>
}