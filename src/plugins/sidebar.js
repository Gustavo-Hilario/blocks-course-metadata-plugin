//eslint-disable-next-line
import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	PluginDocumentSettingPanel,
	PluginPostStatusInfo,
	PluginPrePublishPanel,
	PluginPostPublishPanel,
	PluginMoreMenuItem,
	PluginBlockSettingsMenuItem,
} from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

registerPlugin('metadata-plugin', {
	render: () => (
		<>
			<PluginDocumentSettingPanel
				name="metadata-field-panel"
				title={__('Post Option', 'metadata-plugin')}
				icon="admin-collapse"
			>
				<p>Metadata settings</p>
			</PluginDocumentSettingPanel>
			<PluginPostStatusInfo>
				<p
					style={{
						fontSize: '16px',
						fontWeight: 'bold',
						color: 'red',
					}}
				>
					Metadata settings
				</p>
			</PluginPostStatusInfo>

			<PluginPrePublishPanel
				title="Pre Publish Panel"
				icon="admin-settings"
			>
				<p>Metadata Pre Publish Panel</p>
			</PluginPrePublishPanel>

			<PluginPostPublishPanel
				title="Post Publish Panel"
				icon="admin-settings"
			>
				<p>Metadata Post Publish Panel</p>
			</PluginPostPublishPanel>

			<PluginMoreMenuItem
				icon="admin-customizer"
				onClick={() => {
					alert('Metadata settings');
				}}
			>
				{__('Metadata settings', 'metadata-plugin')}
			</PluginMoreMenuItem>

			<PluginBlockSettingsMenuItem
				label="Metadata Plugin Test"
				allowedBlocks={['core/paragraph']}
				icon="admin-customizer"
				onClick={() => {
					alert('Metadata settings');
				}}
			></PluginBlockSettingsMenuItem>

			<PluginSidebar
				name="metadata-field-sidebar"
				icon="admin-settings"
				title={__('Post Option', 'metadata-plugin')}
			>
				<p>Metadata settings</p>
			</PluginSidebar>
		</>
	),
});
