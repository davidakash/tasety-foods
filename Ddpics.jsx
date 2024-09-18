import { useState } from "react"
// import { Link } from "react-router-dom";
import Add from "./Add"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import'./Ddpics.css'



function Ddpics() {
    const [pic, pto] = useState([{
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-1.jpg.webp",
        price: "$200",
        quantity: 1,
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-2.jpg.webp",
        price: "$600",
        quantity: 1
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-3.jpg.webp",
        price: "$678",
        quantity: 1
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-4.jpg.webp",
        price: "$450",
        quantity: 1
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-5.jpg.webp",
        price: "$200",
        quantity: 1
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-6.jpg.webp",
        price: "$800",
        quantity: 1
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-7.jpg.webp",
        price: "$200",
        quantity: 1
    }, {
        img: "https://preview.colorlib.com/theme/liquorstore/images/prod-8.jpg.webp",
        price: "$600",
        quantity: 1
    }
    ])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ball, mall] = useState([])
    const [mines, decre] = useState()

    function add(index) {
        const get = pic[index].quantity += 1
        decre(get)
        toast.success("Add your order!");
    }
    function decrement(index) {
        const less = pic[index].quantity -= 1
        decre(less)
        toast.warning("Cancel Order!");
    }

    function hello(item) {
        ball.push(item);
        console.log(ball);
        toast.success("Add your order!");
    }

    function deleted(index) {
        const van = [...ball]
        van.splice(index, 1)
        mall(van)
        console.log(van)
        toast.warning("Cancel Order!");
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                YOUR ORDERS
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ORDER ITEMS</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {ball.map((item, index) => (
                        <div className="col-md-3 mt-5">
                            <div class="card" id="hh" style={{ width: "13rem" }}>
                                <img src={item.img} class="card-img-top" />
                                <div class="card-body">
                                    <p class="card-text">
                                        {item.pg}
                                    </p>
                                    <h3>{item.price}</h3><br /><br />
                                    <button id="bb1" onClick={() => add(index)}>+</button>
                                    <span id="bb4">  {item.quantity}</span>
                                    <button id="bb2" onClick={() => decrement(index)}>-</button><br /><br />
                                    <button id="bb3" onClick={() => deleted(index)}>CANCEL</button>
                                </div>
                            </div><br /><br />
                        </div>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>


            <section className="container">
                <div className="row">
                    <div className="col-12 text-center justify-content-around">
                        <small>Our Delightful offerings</small><br />
                        <h1>Tastefully Yours</h1>
                    </div>
                </div>
            </section>
            <div className="container img text-center">
                <div className="row justify-content-around">
                    {pic.map((item, index) => (
                        <div className="col-md-3 mt-5">
                            <div class="card" id="hh" style={{ width: "13rem" }}>
                                <img src={item.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">
                                        {item.pg}
                                    </p>
                                    <h3>{item.price}</h3><br /><br />
                                    <button id="bb1" onClick={() => add(index)}>+</button>
                                    <span id="bb4">{item.quantity}</span>
                                    <button id="bb2" onClick={() => decrement(index)}>-</button><br /><br />
                                    <button id="bb3" onClick={() => hello(item)}>GET ITEMS</button>
                                </div>
                            </div><br /><br />
                        </div>
                    ))}
                </div>
            </div><br /><br />
            <div className="bon">
                <div className="row justify-content-around">
                    <div className="col-12 text-center">
                        <button>View All Products</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Add ball={ball} />
        </>
    )
}
export default Ddpics