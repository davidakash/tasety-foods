import { useState } from "react"


function Recent() {

    const [ds, op] = useState([{
        img: "https://preview.colorlib.com/theme/liquorstore/images/image_1.jpg.webp",
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/image_2.jpg.webp",
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/image_3.jpg.webp",
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/image_4.jpg.webp",  
    }
    ])

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12 text-center justify-content-around">
                        <small>Blog</small><br />
                        <h1>Recent Blog</h1>
                    </div>
                </div>
            </section><br /><b></b>

            <div className="container">
                <div className="row">
                    {ds.map(ff=>(
                        <div class="card mb-4" style={{width:'540px'}}>
                        <div class="row">
                            <div class="col-md-4">
                                <img src={ff.img} class=" rounded-start" alt="..." height={300} width={180}/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
            </div>
        </>
    )
}
export default Recent