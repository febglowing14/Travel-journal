import imageone from "../image/one.jpeg"
 import imagetwo from "../image/Two.png"

 export default function Entry(props){
    console.log(props)
    return (
        <article className="firstfigure">
             <div>
        <img className="paris" src={props.img.src}    />
        </div>
        <div>
            <img className="marker" src={imagetwo} />
            <span className="country">{props.country}</span>
            
            <a href={props.googlemap}>  view on google map</a>
            <h2 className="entrytitle">{props.title}</h2>
            <p className="entrytext">{props.text}</p>
        </div>
        </article>
    )
}