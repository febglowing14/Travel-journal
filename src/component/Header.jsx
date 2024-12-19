import image from "../image/globeimg.jpg";

export default function Header() {
  return (
    <header>
      <img className="global" src={image} alt="Globe" />
      <h1>  My Travel Journal</h1>
    </header>
  )
}