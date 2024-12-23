import Header from "./component/Header.jsx"
import Entry from "./component/Entry.jsx"
import data from "./data.js"
export default function App(){
    const entryElements =data.map((x) => {
        return (
            <Entry
            img ={x.img}
            country ={x.country}
            googlemap ={x.googleMapsLink}
            title ={x.title}
            text ={x.text}



            />

        )
    }
)

    return (
        <>
        <Header />
        {entryElements}
        </>
        
        
    )
}