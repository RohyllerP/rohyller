<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Portafolio creado a base de PHP y otros lenguajes como Javacript,html y css por mi persona Rohyller Pereira">
	<meta property="og:image" content="asset/imagenes/yo.jpg">
	<meta property="og:description" content="Developer">
	<meta property="og:title" content="Portafolio creado a base de PHP y otros lenguajes como Javacript,html y css por mi persona Rohyller Pereira">
	<meta name="keywords" content="Portafolio gitgub front end developer">
	<meta name="author" content="Rohyller Pereira">
	<link rel="icon" href="asset/iconos/logo-bien.ico">
 	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
 	<link rel="stylesheet" href="css/navbar.css">
 	<link rel="stylesheet" href="css/everything.css">
 	<link rel="stylesheet" href="css/header.css">
 	<link rel="stylesheet" href="css/footer.css">
	<title>Inicio</title>
</head>
<body>
	<?php 
		include('modulos/navbar.php');
	?>
	<?php 
		include('modulos/header.php');
	?>
	<?php 
		include('contenido/inicio.php');
	?>
	<?php 
		include('modulos/footer.php');
	?>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/ScrollTrigger.min.js"></script>
	<script src="js/animaciones.js"></script>
	<script src="js/everything.js"></script>
</body>
</html>
