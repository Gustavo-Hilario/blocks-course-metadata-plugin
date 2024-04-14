import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { unregisterBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

// Function and filter to change the paragraph block icon and other attributes
const changeParagraphAttributes = (settings, name) => {
	if (name !== 'core/paragraph') {
		return settings;
	}

	return {
		...settings,
		icon: 'editor-code',
		description:
			'This is a custom description created with a filter for the paragraph block',
		dropCap: true,
		keywords: ['custom', 'paragraph', 'block', 'filter', 'text'],
	};
};

addFilter(
	'blocks.registerBlockType',
	'blocks-course/change-paragraph-icon',
	changeParagraphAttributes
);

// Modifies the appearance of the core/paragraph block by adding borders and padding.
const modifyParagraphBorders = (BlockEdit) => {
	return (props) => {
		const { name } = props;
		if (name !== 'core/paragraph') {
			return <BlockEdit {...props} />;
		}

		return (
			<div
				style={{
					border: '1px solid #f00',
					padding: '10px',
					margin: '10px 0',
				}}
			>
				<BlockEdit {...props} />
			</div>
		);
	};
};

addFilter(
	'editor.BlockEdit',
	'blocks-course/modify-paragraph-edit',
	modifyParagraphBorders
);

// Modifies the appearance of the core/paragraph block by adding an InspectorControls panel.
const modifyEditAddInspectorControls = (BlockEdit) => {
	return (props) => {
		return (
			<>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title="Custom Panel" initialOpen={false}>
						<p>This is a custom panel added with a filter</p>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
};

addFilter(
	'editor.BlockEdit',
	'blocks-course/modify-edit-add-inspector-controls',
	modifyEditAddInspectorControls
);

// Unregisters the core/quote block
// It was ""allowed"" on the PHP filter but we are unregistering it here
domReady(function () {
	unregisterBlockType('core/quote');
});
