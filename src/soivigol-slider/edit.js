/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	RangeControl,
	ToggleControl
} from '@wordpress/components';

import Glider from 'react-glider';
import 'glider-js/glider.min.css';


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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		setAttributes,
		attributes: { useArrows, useDots, numDesktop, numTablet, numMobile }
	} = props;

	const ALLOWED_BLOCKS = [ 'soivigol/soivigol-slider-item' ];

	const MY_TEMPLATE = [
		[ 'soivigol/soivigol-slider-item', {} ],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title="Número de Slides visibles" initialOpen={ true }>
					<PanelRow className="number">
						<RangeControl
							label= { __( 'Desktop', 'soivigol-sliders' ) }
							value={ numDesktop }
							onChange={ (value) => setAttributes( { numDesktop: value } ) }
							min={ 1 }
							max={ 6 }
						/>
					</PanelRow>
					<PanelRow className="number">
						<RangeControl
							label= { __( 'Tablet', 'soivigol-sliders' ) }
							value={ numTablet }
							onChange={ (value) => setAttributes( { numTablet: value } ) }
							min={ 1 }
							max={ 6 }
						/>
					</PanelRow>
					<PanelRow className="number">
						<RangeControl
							label= { __( 'Mobile', 'soivigol-sliders' ) }
							value={ numMobile }
							onChange={ (value) => setAttributes( { numMobile: value } ) }
							min={ 1 }
							max={ 6 }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Arrows', 'soivigol-sliders' ) }
							help={
								useArrows
									? __( 'With Arrows', 'soivigol-sliders' )
									: __( 'Without Arrows', 'soivigol-sliders' )
							}
							checked={ useArrows }
							onChange={ () => {
								setAttributes( { useArrows: ! useArrows } )
							} }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={ __( 'Dots', 'soivigol-sliders' ) }
							help={
								useDots
									? __( 'With Dots', 'soivigol-sliders' )
									: __( 'Without Dots', 'soivigol-sliders' )
							}
							checked={ useDots }
							onChange={ () => {
								setAttributes( { useDots: ! useDots } )
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className={ `inner-container num-${ numDesktop }` }>
					<InnerBlocks
						templateLock={ false }
						template={ MY_TEMPLATE }
						allowedBlocks={ ALLOWED_BLOCKS }
						orientation="horizontal"
						renderAppender={ () => (
							<span className='soivigol-block-appender'><InnerBlocks.ButtonBlockAppender/>Add Slider</span>
						) }
					/>
				</div>
			</div>
		</>
	);
}
