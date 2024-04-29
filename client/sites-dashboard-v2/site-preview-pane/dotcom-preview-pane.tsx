import { SiteExcerptData } from '@automattic/sites';
import { useI18n } from '@wordpress/react-i18n';
import React, { useMemo } from 'react';
import ItemPreviewPane, {
	createFeaturePreview,
} from 'calypso/a8c-for-agencies/components/items-dashboard/item-preview-pane';
import { ItemData } from 'calypso/a8c-for-agencies/components/items-dashboard/item-preview-pane/types';
import HostingOverview from 'calypso/hosting-overview/components/hosting-overview';
import { GitHubDeploymentCreation } from 'calypso/my-sites/github-deployments/deployment-creation';
import { GitHubDeploymentManagement } from 'calypso/my-sites/github-deployments/deployment-management';
import { DeploymentRunsLogs } from 'calypso/my-sites/github-deployments/deployment-run-logs';
import { GitHubDeployments } from 'calypso/my-sites/github-deployments/deployments';
import HostingActivate from 'calypso/my-sites/hosting/hosting-activate';
import Hosting from 'calypso/my-sites/hosting/main';
import SiteMonitoringPhpLogs from 'calypso/site-monitoring/components/php-logs';
import SiteMonitoringServerLogs from 'calypso/site-monitoring/components/server-logs';
import SiteMonitoringOverview from 'calypso/site-monitoring/components/site-monitoring-overview';
import {
	DOTCOM_HOSTING_CONFIG,
	DOTCOM_OVERVIEW,
	DOTCOM_MONITORING,
	DOTCOM_PHP_LOGS,
	DOTCOM_SERVER_LOGS,
	DOTCOM_GITHUB_DEPLOYMENTS,
	DOTCOM_HOSTING_CONFIG_ACTIVATE,
	DOTCOM_GITHUB_DEPLOYMENTS_CREATE,
	DOTCOM_GITHUB_DEPLOYMENTS_MANAGE,
	DOTCOM_GITHUB_DEPLOYMENTS_LOGS,
} from './constants';

import './style.scss';

type Props = {
	site: SiteExcerptData;
	selectedSiteParams: any;
	selectedSiteFeature: string;
	selectedSiteSubfeature: string;
	setSelectedSiteFeature: ( feature: string ) => void;
	closeSitePreviewPane: () => void;
};

const DotcomPreviewPane = ( {
	site,
	selectedSiteParams,
	selectedSiteFeature,
	selectedSiteSubfeature,
	setSelectedSiteFeature,
	closeSitePreviewPane,
}: Props ) => {
	const { __ } = useI18n();

	const isDotcomSite = !! site.is_wpcom_atomic || !! site.is_wpcom_staging_site;

	// Dotcom tabs: Overview, Monitoring, GitHub Deployments, Hosting Config
	const features = useMemo(
		() => [
			createFeaturePreview(
				DOTCOM_OVERVIEW,
				__( 'Overview' ),
				true,
				selectedSiteFeature,
				setSelectedSiteFeature,
				<HostingOverview />
			),
			createFeaturePreview(
				DOTCOM_HOSTING_CONFIG,
				__( 'Hosting Config' ),
				true,
				selectedSiteFeature,
				setSelectedSiteFeature,
				selectedSiteSubfeature === DOTCOM_HOSTING_CONFIG_ACTIVATE ? (
					<HostingActivate />
				) : (
					<Hosting />
				)
			),
			createFeaturePreview(
				DOTCOM_MONITORING,
				__( 'Monitoring' ),
				isDotcomSite,
				selectedSiteFeature,
				setSelectedSiteFeature,
				<SiteMonitoringOverview />
			),
			createFeaturePreview(
				DOTCOM_PHP_LOGS,
				__( 'PHP Logs' ),
				isDotcomSite,
				selectedSiteFeature,
				setSelectedSiteFeature,
				<SiteMonitoringPhpLogs />
			),
			createFeaturePreview(
				DOTCOM_SERVER_LOGS,
				__( 'Server Logs' ),
				isDotcomSite,
				selectedSiteFeature,
				setSelectedSiteFeature,
				<SiteMonitoringServerLogs />
			),
			createFeaturePreview(
				DOTCOM_GITHUB_DEPLOYMENTS,
				__( 'GitHub Deployments' ),
				true,
				selectedSiteFeature,
				setSelectedSiteFeature,
				( function () {
					if ( selectedSiteSubfeature === DOTCOM_GITHUB_DEPLOYMENTS_CREATE ) {
						return <GitHubDeploymentCreation />;
					} else if ( selectedSiteSubfeature === DOTCOM_GITHUB_DEPLOYMENTS_MANAGE ) {
						const { deploymentId } = selectedSiteParams;
						return <GitHubDeploymentManagement codeDeploymentId={ deploymentId } />;
					} else if ( selectedSiteSubfeature === DOTCOM_GITHUB_DEPLOYMENTS_LOGS ) {
						const { deploymentId } = selectedSiteParams;
						return <DeploymentRunsLogs codeDeploymentId={ deploymentId } />;
					}
					return <GitHubDeployments />;
				} )()
			),
		],
		[
			selectedSiteParams,
			selectedSiteFeature,
			selectedSiteSubfeature,
			setSelectedSiteFeature,
			site,
		]
	);

	const itemData: ItemData = {
		title: site.title,
		subtitle: site.slug,
		url: site.URL,
		blogId: site.ID,
		isDotcomSite: site.is_wpcom_atomic || site.is_wpcom_staging_site,
		adminUrl: site.options?.admin_url || `${ site.URL }/wp-admin`,
	};

	return (
		<ItemPreviewPane
			itemData={ itemData }
			closeItemPreviewPane={ closeSitePreviewPane }
			features={ features }
			itemPreviewPaneHeaderExtraProps={ {
				externalIconSize: 16,
			} }
		/>
	);
};

export default DotcomPreviewPane;