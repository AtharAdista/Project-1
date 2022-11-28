import Navbar from "../component/navbar.js"
import "./Home.css"
import {Link} from "react-router-dom"
import img from "../img/Home.svg"

function Home() {
    return(
        <>
        <Navbar></Navbar>
        <div className="Gambar">
            <img src = {img}></img>
        </div>
        <p className="welcome">
            Welcome
        </p>
        <p className="Kata">
            "Dapatkan VOUCHER 20% dengan mengajak temanmu untuk ikut kelas skill IT APAPUN dengan kode Referal"
        </p>
        <p className="getStarted">
            <Link to="/Testimonial" className="Get">Get Started</Link>
        </p>

        </>
        

    )
}

export default Home