/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import {RawHTML} from '@wordpress/element';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	return (
		<div {...useBlockProps.save({ className: 'wp-block-row' })}>
			<div className="testimonial-container">
				<div className="testimonial-wrapper">
					{attributes?.items.length && attributes?.items.map((singleItem, key) => {
						return (
							<div className="testimonial-item">
								<h2 className="testimonial-header my-0" id={key}>
									<RawHTML>
										{singleItem.title}
									</RawHTML>
								</h2>
								<div className="testimonial-content">
									<RawHTML>
										{singleItem.content}
									</RawHTML>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
}
