<?php

function blocks_course_plugin_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    // $post_type_object->template_lock = 'all';
    $post_type_object->template = array(
        array('core/separator'),
        array('core/heading', array(
            'content' => 'All blocks below are from the template added to the Metabox Plugin',
            'level' => 1,
        )),
        array('blocks-course/metadata-block'), 
        array('core/paragraph', array(
            'placeholder' => 'Add description...',
        )),
        array( 'core/columns', array(), array(
            array( 'core/column', array(), array(
                array( 'core/image', array() ),
            ) ),
            array( 'core/column', array(), array(
                array( 'core/paragraph', array(
                    'placeholder' => 'Add a inner paragraph'
                ) ),
            ) ),
        ) ),
        array('blocks-course/team-members', array('columns' => 3),
            array(
                array('blocks-course/team-member', 
                    array(
                        'name' => 'John Doe',
                        'bio' => 'CEO',
                        'url' => 'https://picsum.photos/id/4/5000/3333',
                    )),
                array('blocks-course/team-member', 
                    array(
                        'name' => 'John Doe',
                        'bio' => 'CEO',
                        'url' => 'https://picsum.photos/id/5/5000/3333',
                    )),
                array('blocks-course/team-member', 
                    array(
                        'name' => 'John Doe',
                        'bio' => 'CEO',
                        'url' => 'https://picsum.photos/id/6/5000/3333',
                    )),
            ),
        ),
        array('core/separator'),
    );
}
add_action( 'init', 'blocks_course_plugin_register_template' );