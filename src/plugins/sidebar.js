//eslint-disable-next-line
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('metadata-plugin', {
	render: () => (
		<PluginSidebar
			name="metadata-field-sidebar"
			icon="admin-settings"
			title={__('Post Option', 'metadata-plugin')}
		>
			<p>Metadata settings</p>
		</PluginSidebar>
	),
});
