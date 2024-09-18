    import './Backgroundimg.css'

function Backgroundimg() {
    return (
        <>
            <section className='container 2-fulied aa'>
                <div className='row'>
                    <div className='col-md-6'>
                    <nav class="navbar navbar-expand-lg aa">
                            <div class="container-fluid ">
                                <a class="navbar-brand" href="#" id='bb'>HOME</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#" id='bb'>ABOUT</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='bb'>
                                                PRODUCTS
                                            </a>
                                            <ul class="dropdown-menu"id='bb'>
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item" >
                                            <a class="nav-link" href="#" id='bb'>Blog</a>
                                        </li>
                                        <li class="nav-item" id='bb'>
                                            <a class="nav-link" href="#" id='bb'>CONTACT</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="container1">
                <div className="row">
                <div className='col-10'>
                        <h1>LIQUOR STORE</h1>
                    </div>
                    <div className="col-10">
                        <p style={{fontSize:'100px'}}>Good Drink for Good Moments.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Backgroundimg