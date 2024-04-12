//eslint-disable-next-line
import { registerPlugin } from '@wordpress/plugins';
import { useSelect, useDispatch } from '@wordpress/data';

import {
	PluginSidebar,
	// PluginDocumentSettingPanel,
	// PluginPostStatusInfo,
	// PluginPrePublishPanel,
	// PluginPostPublishPanel,
	// PluginMoreMenuItem,
	// PluginBlockSettingsMenuItem,
} from '@wordpress/edit-post';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const MetaFieldInput = () => {
	const subtitleValue = useSelect((select) => {
		return select('core/editor').getEditedPostAttribute('meta')[
			'_blocks_course_post_subtitle'
		];
	});

	const { editPost } = useDispatch('core/editor');
	return (
		<PanelBody title={__('Subtitle Options', 'metadata-plugin')}>
			<TextControl
				label={__('Subtitle', 'metadata-plugin')}
				value={subtitleValue}
				onChange={(value) => {
					editPost({ meta: { _blocks_course_post_subtitle: value } });
				}}
			/>
		</PanelBody>
	);
};

registerPlugin('metadata-plugin', {
	render: () => {
		{
			/* <PluginDocumentSettingPanel
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
			></PluginBlockSettingsMenuItem> */
		}
		return (
			<PluginSidebar
				name="metadata-field-sidebar"
				icon="admin-settings"
				title={__('Post Option', 'metadata-plugin')}
			>
				<MetaFieldInput />
			</PluginSidebar>
		);
	},
});
