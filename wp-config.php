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
if ( file_exists( dirname( __FILE__ ) . '/config-local.php' ) ) {
    include( dirname( __FILE__ ) . '/config-local.php' );
} else {
    define( 'DB_NAME', 'd69095_exitraini' );

    /** Database username */
    define( 'DB_USER', 'madisluik' );

    /** Database password */
    define( 'DB_PASSWORD', 'L}4rD)H_b{Mz7g5y' );

    /** Database hostname */
    define( 'DB_HOST', 'd69095.mysql.zonevs.eu' );
}

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
define( 'AUTH_KEY',         '=TRPI2+oaOIC<1wtz&(oLoG_YRS_lAW%(#owt|UP`|QNBlaMy%Fb6,TwOS?pbH3(' );
define( 'SECURE_AUTH_KEY',  'Q~w/jOrP,8tQB(sz%t/g-<Gr2:><$]JJIlNe3g1=kOfa%)Q)&7:K1`Z`3mGd@|MJ' );
define( 'LOGGED_IN_KEY',    'f$>5kZWpr#yHb N,zdt&TkUiJLo~>m!nPG$g2lKP8}&_p5 nr(#/j#?g@+rzD}48' );
define( 'NONCE_KEY',        '@jq_`.%FM<G0X&3]df%GyZC[%}6^{~Y=N>--5?g]PJ78iJ7AQd@7qJKsM9<mhZ!]' );
define( 'AUTH_SALT',        '3X{xgUr/.*% LaI%szS2s5_7fpJZ2#?N>D+y#|X<2a76q1hx.>9QKw P:F WMUSk' );
define( 'SECURE_AUTH_SALT', '1sI}P(I3<gLi_5ukZ2#6*cJQE2&,WIXDnF06{nc[$b/A9!Lb@,U4U,:_ZB9U$J#*' );
define( 'LOGGED_IN_SALT',   'e~DVVK`nyC jF}h,)[U <U{4B4P=L)BTNE4`~b>Ya&T4M6ZmYQJ;}#qDgX;FS6Yd' );
define( 'NONCE_SALT',       'B#r<W^1ejW>pe~Ro~i;&=]R3d|fzhHOtkuh5t)3WNWL3dJJZOA5x15XBQvs4.Ga>' );

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
