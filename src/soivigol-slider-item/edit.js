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

import { useEffect, useState } from '@wordpress/element'

import { useRef } from "react";

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

	const inputRef = useRef(null);

	const MY_TEMPLATE = [
		['core/paragraph', {}],
	];

	const [ numDesktop, setNumDesktop ] = useState( 0 )

	const [ widthInner, setWidthInner ] = useState( 0 )

	useEffect( () => {
		setNumDesktop( props.context['soivigol/slider-numDesktop'] )
	}, [props.context['soivigol/slider-numDesktop']])

	useEffect( () => {
		const interval = setInterval( () => {
			const inner = inputRef.current.parentNode.parentNode.parentNode.parentNode
			if ( inner.classList.contains( 'wp-block-soivigol-soivigol-slider' ) ) {
				clearInterval( interval )
				setWidthInner( inner.getBoundingClientRect().width )
			}
		},1000)
	},[])

	useEffect( () => {
		const inner = inputRef.current.parentNode.parentNode.parentNode.parentNode
		if ( inner.classList.contains( 'wp-block-soivigol-soivigol-slider' ) ) {
			setWidthInner( inner.getBoundingClientRect().width )
		}
	},[ numDesktop ])

	return (
		<div {...useBlockProps()} ref={ inputRef } style={{ width: ( ( widthInner / numDesktop ) - 16 ) + 'px' }}>
			<InnerBlocks
				templateLock={ false }
				template={ MY_TEMPLATE }
			/>
		</div>
	);
}
