/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, InspectorControls} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import {
	PanelBody,
	PanelRow,
	QueryControls,
	ToggleControl,
	RangeControl
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const { numberOfItems } = attributes;
	const posts = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'trainings', {
			'per_page': numberOfItems
		});
	}, [numberOfItems]);

	return (
		<>
		<InspectorControls>
			<PanelBody title={ __( 'Training list settings', 'sage' ) }>
				<PanelRow className="w-100">
					<QueryControls
						numberOfItems={ numberOfItems }
						onNumberOfItemsChange={ ( value ) =>
							setAttributes( { numberOfItems: value } )
						}
						minItems={ 1 }
						maxItems={ 10 }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>

		<div {...useBlockProps()}>
			<h4 className="mb-0">{__('Training list', 'sage')}</h4>
			{!posts && 'Loading'}
			{posts && posts.length === 0 && 'No Posts'}
			<div className="d-flex">
				{posts && posts.length > 0 && (
					posts.map(singleP => {
						return (
							<p>{singleP.title.rendered}</p>
						)
					})
				)}
			</div>
		</div>
		</>
	);
}
