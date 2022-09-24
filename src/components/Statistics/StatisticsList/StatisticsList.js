import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';

export const StatisticsList = ({ stats }) => {
    return (
        <ul >
            {stats.map((stat) => (<StatisticsItem key={stat.id} label={stat.label} percentage={stat.percentage} />))}
        </ul>
    );
};


StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }
    )).isRequired,
};

