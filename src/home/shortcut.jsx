import {useState} from "react";
function Home() {
    const [cards, setCards] = useState([])
    const addCardElement = (
        <>
            <div className="card">
                <div className="card-body" style={{
                    textAlign: 'center'
                }}>
                    <img src="https://pngimg.com/uploads/plus/plus_PNG106.png" alt=""/>
                    <br/>
                    <button className="btn btn-success" onClick={()=>{setCards([...cards, {a: 1}])}} >ADD NEW CARD</button>
                </div>
            </div>
        </>
    )
    return (
        <>
           <div className="card-group">
             {cards.map((item, index) => {
                return (
                    <>
                        <div className="card" key={cards.length}>
                            <div className="card-body" style={{
                                textAlign: 'center'
                            }}>
                                <img src="https://thumbs.dreamstime.com/z/vector-silhouette-dog-sunset-81020416.jpg" alt=""/>
                                <br/>
                                <button className="btn btn-danger" onClick={()=>{setCards(cards.filter((item, index_) => { return index_ !== index} ))}}>
                                    Delete Card
                                </button>
                            </div>
                        </div>
                    </>
                )
            })}
             {addCardElement}
           </div>
        </>
    );
}
export default Home;