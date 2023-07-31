import React from 'react'
import logo from "../../commonResources/images/icons/logo.png";
import search from "../../commonResources/images/icons/search-icon.png";
import cart from "../../commonResources/images/icons/cart.png";

export default function Header() {
  return (
   <html>
    <head>
    <title>Apple Responsive Replica</title>
 	<meta charset="utf-8"/>
  	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  	<meta name="title" content="Apple Responsive Replica"/>
  	<meta name="description" content="A responsive replica of Apple's website"/>
  	<link rel='icon' href='images/icons/favicon.ico' type='image/x-icon'/ >

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css"/>

	<link href="https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet"/>

	<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="css/styles.css"/>
    </head>
    <body>
    <div>
        <div class="nav-wrapper fixed-top">
		<div class="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="#"><img src={logo}/></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">iphone</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
			        </ul>
			    </div>
			</nav>
    </div>
    </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    </body>
   </html>
  );
}
