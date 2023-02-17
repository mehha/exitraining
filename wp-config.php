<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'exitraining' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jO[s!z9=laGEb([<%I@.,uDM/unK!jokHoLVxi|H@y7W!<ffiO[+j}$[u]iCnu.E' );
define( 'SECURE_AUTH_KEY',  'QiV9Q)OMT6@5s939/*J 2)AN6~>R&eF1,obF /~7K[F~hdKi&=JPl-69+S5n*flH' );
define( 'LOGGED_IN_KEY',    'f8~VJoS3BEf$vnQ=F[4,V}.om5:BP#vQdxiW6 W]x3mH^n|1X>6BU`}YTs4mW J{' );
define( 'NONCE_KEY',        '+JUoXOPP4T:c=O+V&wl~IL=`tL)}I_!kJ#sHpU[|P{^I/9HZw>c=>?/?G(W!zmAj' );
define( 'AUTH_SALT',        ',ovLaOhY<+cL}vdrDw$yC0L$Q*{PW,Dmd*Us()4s3I25AST_u0f*i4imQ|N5pjxF' );
define( 'SECURE_AUTH_SALT', 'G N.r2?279Mn]2_O1=XHTIlC/GrnMDW{rKeurZ{=h>2q[#F#VBbhCL{4kZ#}%pT(' );
define( 'LOGGED_IN_SALT',   'D/Tg?KW5oD?zy7nzgq`+[E2_,W1C++T8wsNq)NZpzn@q6/a*6%xlr3uEA]x-u_*J' );
define( 'NONCE_SALT',       'zui@Y[s=mG& Cnc|nY8o0}/DObAaqS`/7e~zRTE&tkq6ymy F%]G&3B&0Uc`#h$2' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
