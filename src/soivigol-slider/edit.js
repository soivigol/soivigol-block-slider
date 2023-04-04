/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	SelectControl,
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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		setAttributes,
		attributes: { type, format, size, design },
		hasChildBlocks,
	} = props;

	const ALLOWED_BLOCKS = [ 'soivigol/soivigol-slider-item' ];

	const MY_TEMPLATE = [
		[ 'soivigol/soivigol-slider-item', {} ],
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title="Clusters Chavetas" initialOpen={ true }>
					<PanelRow>Elige el tipo de cluster</PanelRow>
					<PanelRow>
					<SelectControl
						label="Tipo"
						value={ type }
						options={ [
							{ label: 'Normal', value: 'normal' },
							{ label: 'Rutas/Mapas', value: 'maps' },
							{ label: 'Mejor opción', value: 'best-option' },
						] }
						onChange={ ( value ) => {
								if ( 'best-option' === value ) {
									setAttributes( { type: value } )
									setAttributes( { design: 'best-option' } )
									setAttributes( { size: 'super-big' } )
									setAttributes( { format: '1'} )
								} else {
									setAttributes( { type: value } )
									setAttributes( { design: 'grip' } )
									setAttributes( { size: 'big' } )
								}
							}
						}
					/>
					</PanelRow>
					{
						'normal' === type ? (
							<>
							<PanelRow>
								<SelectControl
									label="Tamaño"
									value={ size }
									options={ [
										{ label: 'Pequeño', value: 'small' },
										{ label: 'Mediano', value: 'medium' },
										{ label: 'Grande', value: 'big' },
									] }
									onChange={ ( value ) =>
										setAttributes( { size: value } )
									}
								/>
							</PanelRow>
							<PanelRow>
							<SelectControl
								label="Diseño"
								value={ design }
								options={ [
									{ label: 'Slider', value: 'slider' },
									{ label: 'Grip', value: 'grip' },
								] }
								onChange={ ( value ) =>
									setAttributes( { design: value } )
								}
							/>
							</PanelRow>
							<PanelRow>¿Vas a meter texto y el link en el box?</PanelRow>
							<PanelRow>
								<SelectControl
									label="Formato"
									value={ format }
									options={ [
										{ label: 'Sin texto', value: '0' },
										{ label: 'Con texto', value: '1' },
									] }
									onChange={ ( value ) =>
										setAttributes( { format: value } )
									}
								/>

							</PanelRow>
							<PanelRow>
							<div>¡¡Ojo!! En los shortcodes se ponen %, no le des más vueltas</div>
							</PanelRow>
							</>
						) : (
							<>
							{
								'best-option' !== type && (
									<SelectControl
										label="Tamaño"
										value={ size }
										options={ [
											{ label: 'Mediano', value: 'big' },
											{ label: 'Grande', value: 'super-big' },
										] }
										onChange={ ( value ) =>
											setAttributes( { size: value } )
										}
									/>
								)
							}
							</>
						)
					}
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className={ `inner-container ${design} ${type} size-${ size }` }>
					<InnerBlocks
						templateLock={ false }
						template={ MY_TEMPLATE }
						allowedBlocks={ ALLOWED_BLOCKS }
						orientation="horizontal"
						renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}
					/>
				</div>
			</div>
		</>
	);
}
