import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const myHighlightButton = ({ isActive, value, onChange }) => (
	<RichTextToolbarButton
		icon="admin-customizer"
		title={__('Highlight', 'metadata-plugin')}
		onClick={() =>
			onChange(
				toggleFormat(value, {
					type: 'metadata-plugin/highlight',
					attributes: {
						style: 'background-color: yellow;',
					},
				})
			)
		}
		isActive={isActive}
	/>
);

registerFormatType('metadata-plugin/highlight', {
	title: __('Highlight', 'metadata-plugin'),
	// The HTML tag used to create the highlighted text
	tagName: 'span',
	className: 'highlighted',
	edit: myHighlightButton,
});
