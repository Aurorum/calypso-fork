import { translate } from 'i18n-calypso';
import { PerformanceReport } from 'calypso/data/site-profiler/types';
import { CoreWebVitalsDisplay } from 'calypso/performance-profiler/components/core-web-vitals-display';
import { InsightsSection } from 'calypso/performance-profiler/components/insights-section';
import { PerformanceScore } from 'calypso/performance-profiler/components/performance-score';
import { ScreenshotThumbnail } from '../screenshot-thumbnail';
import { ScreenshotTimeline } from '../screenshot-timeline';
import './style.scss';

type PerformanceProfilerDashboardContentProps = {
	performanceReport: PerformanceReport;
};

export const PerformanceProfilerDashboardContent = ( {
	performanceReport,
}: PerformanceProfilerDashboardContentProps ) => {
	const { overall_score, fcp, lcp, cls, inp, ttfb, audits, history, screenshots } =
		performanceReport;

	return (
		<div className="performance-profiler-content">
			<div className="l-block-wrapper container">
				<div className="top-section">
					<PerformanceScore value={ overall_score * 100 } />
					<ScreenshotThumbnail
						alt={ translate( 'Website thumbnail' ) }
						src={ screenshots?.[ screenshots.length - 1 ].data }
					/>
				</div>
				<CoreWebVitalsDisplay
					fcp={ fcp }
					lcp={ lcp }
					cls={ cls }
					inp={ inp }
					ttfb={ ttfb }
					history={ history }
				/>
				<ScreenshotTimeline screenshots={ screenshots ?? [] } />
				{ audits && <InsightsSection audits={ audits } /> }
			</div>
		</div>
	);
};