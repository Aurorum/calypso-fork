import clsx from 'clsx';
import NavigationHeader from 'calypso/components/navigation-header';
import { domainManagementAllOverview } from 'calypso/my-sites/domains/paths';
import { getSubpageParams } from './subpages';
import './style.scss';

type SubpageWrapperProps = {
	children: React.ReactNode;
	subpageKey: string;
	siteName: string;
	domainName: string;
};

const SubpageWrapper = ( { children, subpageKey, siteName, domainName }: SubpageWrapperProps ) => {
	const { CustomHeader, title, subtitle, context } = getSubpageParams( subpageKey ) || {};

	if ( CustomHeader ) {
		return (
			<div className={ clsx( 'subpage-wrapper', `subpage-wrapper--${ subpageKey }` ) }>
				<CustomHeader
					selectedDomainName={ domainName }
					selectedSiteSlug={ siteName }
					context={ context }
				/>
				<div className="subpage-wrapper__content">{ children }</div>
			</div>
		);
	}

	if ( title ) {
		const breadcrumbItems = [
			{
				label: domainName,
				href: domainManagementAllOverview( siteName, domainName ),
			},
			{
				label: title as string,
			},
		];

		return (
			<div className={ clsx( 'subpage-wrapper', `subpage-wrapper--${ subpageKey }` ) }>
				<NavigationHeader
					className="subpage-wrapper__header"
					navigationItems={ breadcrumbItems }
					title={ title }
					subtitle={ subtitle }
					alwaysShowTitle
				/>
				<div className="subpage-wrapper__content">{ children }</div>
			</div>
		);
	}

	return children;
};

export default SubpageWrapper;
