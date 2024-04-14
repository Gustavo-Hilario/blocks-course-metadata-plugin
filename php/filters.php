<?php

function blocks_course_metadata_registration( $metadata ) {
    // echo '<pre style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ccc; position: relative; z-index: 9999;">';
    
    // var_dump($metadata);
    // echo '</pre>';
    if($metadata['name'] === 'core/paragraph') {
        $metadata['title']  = 'Text Block (PHP Filter)';
        $metadata['supports']['color'] = array(
            'gradients' => true,
            'link' => true,
        );
    }
    return $metadata;
};
add_filter( 'block_type_metadata', 'blocks_course_metadata_registration' );

function blocks_course_filter_allowed_blocks( $allowed_blocks, $editor_context ) {
    if( !empty($editor_context->post) && $editor_context->post->post_type === 'post' ) {
        $allowed_blocks = array(
            'core/paragraph',
            'core/heading',
            'core/image',
            'core/gallery',
            'core/list',
            'core/quote',
            'create-block/todo-list',
        );
    }
    return $allowed_blocks;
}

add_filter( 'allowed_block_types_all', 'blocks_course_filter_allowed_blocks', 10, 2 );