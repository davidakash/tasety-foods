import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signin.css'

const Signin = () => {
    const Navigate = useNavigate();


    const [id, ps] = useState({
        name: '',
        password: ''
    })
    const [go, send] = useState({
        name: '',
        password: "",
    })

    const setsign = (event) => {
        const { name, value } = event.target;
        ps({ ...id, [name]: value })
        console.log(name, value);
        console.log(id);
    }

    function went() {
        send({
            name: id.name,
            password: id.password
        })



        // const callt = document.getElementById("call");
        // const mallt = document.getElementById("mall");
        const nerror = document.getElementById("error1")
        const perror = document.getElementById("error2 ")


        if (id.name == null || id.name == '') {
            nerror.innerHTML = ("ID NAME")
            nerror.style.color = "red"

            perror.innerHTML = ("ENTER YOUR PASSCODE")
            perror.style.color = "red"
        }
        else if (id.password == null || id.password == '') {
            perror.innerHTML = ("ENTER YOUR PASSCODE")
            perror.style.color = "red"
        }
        else if (id.name == "david" && id.password == "str") {
            Navigate('/Home')
        }
    }

    return (
        <>

            <div className='container-fluid back pa-5'>
                <div className='row justify-contenet-center'>
                    <div className='col-md-6  mt-5 mb-5text- center'>
                        <div>
                            <h3 id='call'>
                                <input className='bb' type="text" placeholder='Enter Your Name' name='name' value={id.name} onChange={setsign} /><br /><br />
                            </h3>
                            <small id='error1'></small>
                        </div>

                        <div>
                            <h3 id='mall'>
                                <input className='bb' type="text" placeholder='Code Word' name='password' value={id.password} onChange={setsign} /><br /><br />
                            </h3>
                            <small id='error2'></small>
                        </div>

                        <button className='cc' onClick={went}>SIGNIN</button>
                        
                    </div>
                </div>
            </div>


        </>
    )
}
export default Signin