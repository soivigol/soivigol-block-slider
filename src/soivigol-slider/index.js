/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import './editor.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

const icon = () => {
	return(
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="">
			<g>
				<g fill="#90caf9">
					<path d="M23 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM15 1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM1 6h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zM23 9h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM14 9h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM1 15h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z" fill="#97bcbd" data-original="#90caf9" class=""></path>
				</g>
				<path fill="#619899" d="M23 18H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" data-original="#42a5f5" class=""></path><path fill="#2d8283" d="M12 18H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11z" data-original="#3990d5" class=""></path>
				<path fill="#2d8283" d="M12 0h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM12 9h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM21 0h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM21 9h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM3 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM3 9H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2z" data-original="#7db0d9" class=""></path>
			</g>
		</svg>

	)
}
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'soivigol/soivigol-slider', {

	icon: icon,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
