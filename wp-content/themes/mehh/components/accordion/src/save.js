/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

import {RawHTML} from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
		<div {...useBlockProps.save({ className: 'wp-block-row' })}>
			<div className="accordion" id="accordionModule">
				{attributes?.items.length && attributes?.items.map((singleItem, key) => {
					return (
						<div className="accordion-item">
							<h2 className="accordion-header my-0" id={key}>
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
										data-bs-target={`#collapse-${key}`} aria-expanded="false"
										aria-controls={`collapse-${key}`}>
									<RawHTML>
										{singleItem.title}
									</RawHTML>
								</button>
							</h2>
							<div id={`collapse-${key}`} className="accordion-collapse collapse"
								 aria-labelledby={`heading-${key}`} data-bs-parent="#accordionModule">
								<div className="accordion-body">
									<RawHTML>
										{singleItem.content}
									</RawHTML>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	);
}
