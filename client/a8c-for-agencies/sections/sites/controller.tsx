import { Context, type Callback } from '@automattic/calypso-router';
import SitesSidebar from '../../components/sidebar-menu/sites';
import {
	A4A_SITES_DASHBOARD_DEFAULT_CATEGORY,
	A4A_SITES_DASHBOARD_DEFAULT_FEATURE,
	DEFAULT_SORT_DIRECTION,
	DEFAULT_SORT_FIELD,
} from './constants';
import SitesDashboard from './sites-dashboard';
import { SitesDashboardProvider } from './sites-dashboard-provider';
import type { DashboardSortInterface } from 'calypso/jetpack-cloud/sections/agency-dashboard/sites-overview/types';

function configureSitesContext( context: Context ) {
	const category = context.params.category || A4A_SITES_DASHBOARD_DEFAULT_CATEGORY;
	const siteUrl = context.params.siteUrl;
	const siteFeature = context.params.feature || A4A_SITES_DASHBOARD_DEFAULT_FEATURE;

	const {
		s: search,
		page: contextPage,
		issue_types,
		sort_field,
		sort_direction,
		is_favorite,
	} = context.query;

	const sort: DashboardSortInterface = {
		field: sort_field || DEFAULT_SORT_FIELD,
		direction: sort_direction || DEFAULT_SORT_DIRECTION,
	};
	const currentPage = parseInt( contextPage ) || 1;

	context.primary = (
		<SitesDashboardProvider
			categoryInitialState={ category }
			siteUrlInitialState={ siteUrl }
			siteFeatureInitialState={ siteFeature }
			showOnlyFavoritesInitialState={
				is_favorite === '' || is_favorite === '1' || is_favorite === 'true'
			}
			path={ context.path }
			searchQuery={ search }
			currentPage={ currentPage }
			issueTypes={ issue_types }
			sort={ sort }
			{ ...( context.featurePreview ? { featurePreview: context.featurePreview } : {} ) }
		>
			<SitesDashboard />
		</SitesDashboardProvider>
	);

	context.secondary = <SitesSidebar path={ context.path } />;
}

export const sitesContext: Callback = ( context: Context, next ) => {
	configureSitesContext( context );
	next();
};
