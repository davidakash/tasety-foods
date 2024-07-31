import { useState } from "react"

function Ddpics() {
    const [pic, pto] = useState([{
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-1.jpg.webp",
        name: "SaleBrandyBacardi 151$69.00 $49.00",
 pg:"A small river named Duden flows by their place and supplies it with the necessary regelialia."


    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-2.jpg.webp",
        name: " 23 April 2020",
      pg:"A small river named Duden flows by their place and supplies it with the necessary regelialia."


    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-3.jpg.webp"
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-4.jpg.webp"
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-5.jpg.webp"
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-6.jpg.webp"
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-7.jpg.webp"
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-8.jpg.webp"
    }
    ])
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12 text-center justify-content-around">
                        <small>Our Delightful offerings</small><br />
                        <h1>Tastefully Yours</h1>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-around">
                    {pic.map(item => (
                        <div className="col-md-3 mt-5">
                            <div class="card" style={{ width: "15rem" }}>
                                <img src={item.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        {item.pg}
                                    </p>
                                </div>
                            </div><br /><br />
                        </div>
                    ))}
                </div>
            </div>
            <div className="bon">
                <div className="row justify-content-around">
                    <div className="col-12 text-center">
                        <button>View All Products</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Ddpics