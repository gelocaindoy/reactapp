import {useState} from "react";
function Home() {
    const [cards, setCards] = useState([])
    const addNewCards = ()=> {
        setCards([...cards, {a: 1}])
    }
    const deleteSelectedCard = (index) => {
        setCards(cards.filter((item, index_) => { return index_ !== index} ))
    }
    const addCardElement = (
        <>
            <div className="card">
                <div className="card-body" style={{
                    textAlign: 'center'
                }}>
                    <img src="https://pngimg.com/uploads/plus/plus_PNG106.png" alt=""/>
                    <br/>
                    <button className="btn btn-success" onClick={()=>{addNewCards()}} >ADD NEW CARD</button>
                </div>
            </div>
        </>
    )
    const renderCards = () => {
        if(cards && cards.length)
            return cards.map((item, index) => {
                return (
                    <>
                        <div className="card" key={cards.length}>
                            <div className="card-body" style={{
                                textAlign: 'center'
                            }}>
                                <img src="https://thumbs.dreamstime.com/z/vector-silhouette-dog-sunset-81020416.jpg" alt=""/>
                                <br/>
                                <button className="btn btn-danger" onClick={()=>{deleteSelectedCard(index)}}>
                                    Delete Card
                                </button>
                            </div>
                        </div>
                    </>
                )
            })
    }
    return (
        <>
            <div className="card-group">
                {renderCards()}
                {addCardElement}
            </div>
        </>
    );
}

export default Home;