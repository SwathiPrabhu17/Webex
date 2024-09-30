import React from 'react';
import './Services.css';

function Services(){
    return(
        <>
        <section data-aos="flip-up"
    className='services'>
		<div className='service-title'>
			<h1 >What do we provide ? </h1>
			
		</div>
	    <div className="row">
		<div className="col-md-4 col-sm-6 col-xs-12">
			<div className="service-card">
				<div className="cover item-a">
					<h1>Drug <br />delivery Manufacturing</h1>
					{/* <span className="price">$79</span> */}
					<div className="card-back">
						{/* <a href="#">Add to cart</a>
						<a href="#">View detail</a> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ratione possimus 
                           molestias animi voluptatem soluta in excepturi explicabo reiciendis? Debitis
                           harum quae exercitationem corrupti nihil officiis laboriosam animi corporis?</p>
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-4 col-sm-6 col-xs-12">
			<div className="service-card">
				<div className="cover item-b">
					<h1>HDPE<br/> Gardern Manufacturing</h1>
					{/* <span className="price">$35</span> */}
					<div className="card-back">
						{/* <a href="#">Add to cart</a> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ratione possimus 
                           molestias animi voluptatem soluta in excepturi explicabo reiciendis? Debitis
                           harum quae exercitationem corrupti nihil officiis laboriosam animi corporis?</p>
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-4 col-sm-6 col-xs-12">
			<div className="service-card">
				<div className="cover item-c">
					<h1>Organic<br/>Fertilizer Manufacturing</h1>
					{/* <span className="price">$155</span> */}
					<div className="card-back">
						{/* <a href="#">Add to cart</a> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed ratione possimus 
                            molestias animi voluptatem soluta in excepturi explicabo reiciendis? Debitis
                            harum quae exercitationem corrupti nihil officiis laboriosam animi corporis?</p>
					</div>
				</div>
			</div>
		</div>
	</div>
            </section>

        </>
    )
}

export default Services
