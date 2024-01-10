import { Button } from '@automattic/components';
import { useTranslate } from 'i18n-calypso';
import { FC, useState } from 'react';
import TrackComponentView from 'calypso/lib/analytics/track-component-view';
import { useDispatch, useSelector } from 'calypso/state';
import { livePreview } from 'calypso/state/themes/actions';
import { getIsLivePreviewSupported } from 'calypso/state/themes/selectors';
import type { GlobalStyles } from '@automattic/data-stores';

interface Props {
	siteId: number;
	themeId: string;
	hasStyleVariations: boolean;
	styleVariation?: GlobalStyles;
}

/**
 * Live Preview leveraging Gutenberg's Block Theme Previews
 * @see pbxlJb-3Uv-p2
 */
export const LivePreviewButton: FC< Props > = ( {
	siteId,
	themeId,
	hasStyleVariations,
	styleVariation,
} ) => {
	const translate = useTranslate();
	const dispatch = useDispatch();

	const [ isLoading, setIsLoading ] = useState( false );

	const isLivePreviewSupported = useSelector( ( state ) =>
		getIsLivePreviewSupported( state, themeId, siteId )
	);
	if ( ! isLivePreviewSupported ) {
		return null;
	}

	const handleClick = () => {
		setIsLoading( true );
		dispatch( livePreview( siteId, themeId, hasStyleVariations, styleVariation, 'detail' ) );
	};

	return (
		<>
			<TrackComponentView eventName="calypso_block_theme_live_preview_impression" />
			<Button busy={ isLoading } onClick={ handleClick }>
				{ translate( 'Preview & Customize' ) }
			</Button>
		</>
	);
};
