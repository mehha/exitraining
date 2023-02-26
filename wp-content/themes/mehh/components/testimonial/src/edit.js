/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import {Panel, PanelBody, PanelRow, Button} from '@wordpress/components';
import {useState} from '@wordpress/element';
import {more, close} from '@wordpress/icons';

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
	const blockProps = useBlockProps();
	const [items, setItems] = useState(attributes.items || []);

	const addRow = () => {
		setItems([...items, {title: '', content: ''}]);
	}

	const deleteRow = (val, i) => {
		setItems((prevItems) => {
			let items = [...prevItems];
			items.splice(i,1);
			setAttributes({items: items});
			return items
		})
	}

	const updateTitle = (val, i) => {
		setItems(prevItems => {
			prevItems[i].title = val
			setAttributes({items: [...prevItems]});
			return [
				...prevItems,
			]
		});
	}

	const updateContent = (val, i) => {
		setItems(prevItems => {
			prevItems[i].content = val
			setAttributes({items: [...prevItems]});
			return [
				...prevItems,
			]
		});
	}

	return (
		<div {...useBlockProps()}>
			<Panel header="Testimonial">
				{items.map((item, i) => (
					<div className="panel-body-container">
						<PanelBody
							title={`${item.title.substring(0,20)} ${item.title.length > 20 ? '...' : ''}`}
							initialOpen={items.length === i + 1}
						>
							<PanelRow>
								<RichText
									placeholder="Title"
									value={item.title}
									onChange={(val) => updateTitle(val, i)}
								/>
							</PanelRow>
							<PanelRow>
								<RichText
									placeholder="Content"
									value={item.content}
									onChange={(val) => updateContent(val, i)}
								/>
							</PanelRow>
						</PanelBody>
						<Button
							icon={close}
							label="Delete"
							onClick={(val) => deleteRow(val, i)}
							className="delete-btn"
						/>
					</div>
				))}
			</Panel>
			<Button
				variant="link"
				className="add-btn"
				onClick={() => addRow()}
			>Add row</Button>
		</div>
	);
}
