<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<header id="masthead" class="site-header">
        <nav id="site-navigation" class="main-navigation">
        <button class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </button>
        <button class="closed inactive">
        <p>&#10006;</p>
        </button>
        <div class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></div>      
        </nav>
        <div class="fullscreen-menu inactive" id="fullscreenMenu">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                <img src="<? echo get_template_directory_uri(). '/assets/images/logo.png'; ?>" alt="logo" class="imglogo">
            </a>
            <ul>
                <li><a href="#story"><span>Histoire</span></a></li>
                <li><a href="#newcharacters"><span>Personnages</span></a></li>
                <li><a href="#place"><span>Lieu</span></a></li>
                <li><a href="#studio"><span>Studio</span><span> Koukaki</span></a></li>
            </ul>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">STUDIO KOUKAKI</a>
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/bluecat.png'; ?>" alt="bluecat" class="menuimgcat menuimgcat--bluecat">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/orangecat.png'; ?>" alt="orangecat" class="menuimgcat menuimgcat--orangecat">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/blackcat.png'; ?>" alt="blackcat" class="menuimgcat menuimgcat--blackcat">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/orchid.png'; ?>" alt="orchid" class="menuimgflower menuimgflower--orchid">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/Sunflower.png'; ?>" alt="sunflower" class="menuimgflower menuimgflower--sunflower">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/hibiscus_footer.png'; ?>" alt="hibiscus" class="menuimgflower menuimgflower--hibiscus">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/flower.png'; ?>" alt="flower" class="menuimgflower menuimgflower--flower">
            <img src="<? echo get_stylesheet_directory_uri() . '/assets/random_flower.png'; ?>" alt="flower" class="menuimgflower menuimgflower--randomflower">

        </div>

	</header>
