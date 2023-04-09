/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import {
	useBlockProps,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';

import { useEffect } from '@wordpress/element'


import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {

	const MY_TEMPLATE = [
		['core/paragraph', {}],
	];

	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				templateLock={ false }
				template={ MY_TEMPLATE }
			/>
		</div>
	);
}
