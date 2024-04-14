<?php

function blocks_course_plugin_register_pattern_cat() {
    register_block_pattern_category(
        'blocks-course',
        array( 'label' => __( 'Blocks Course', 'metadata-plugin' ) )
    );
}

add_action( 'init', 'blocks_course_plugin_register_pattern_cat' );

function blocks_course_plugin_register_pattern() {
    register_block_pattern(
        'blocks-course/two-buttons',
        array(
            'title'       => __( 'My Pattern CTA', 'metadata-plugin' ),
            'description' => _x( 'Two horizontal buttons, the left button is filled in, and the right button is outlined.', 'Block pattern description', 'my-plugin' ),
            // Content is the block markup. The code from the editor when using the Code Editor instead of the Visual Editor.
            'content'     => "<!-- wp:buttons {\"align\":\"center\"} -->\n<div class=\"wp-block-buttons aligncenter\"><!-- wp:button {\"backgroundColor\":\"very-dark-gray\",\"borderRadius\":0} -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link has-background has-very-dark-gray-background-color no-border-radius\">" . esc_html__( 'Button One', 'my-plugin' ) . "</a></div>\n<!-- /wp:button -->\n\n<!-- wp:button {\"textColor\":\"very-dark-gray\",\"borderRadius\":0,\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-dark-gray-color no-border-radius\">" . esc_html__( 'Button Two', 'my-plugin' ) . "</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->",
            'categories'  => array( 'blocks-course' ),
            'keywords'    => array( 'buttons', 'cta' , 'blocks-course' , 'my pattern' ),
        )
    );  
}

add_action( 'init', 'blocks_course_plugin_register_pattern' );