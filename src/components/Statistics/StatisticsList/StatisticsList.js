import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem/StatisticsItem';
import { StatsUl } from './StatisticsList.styled';

export const StatisticsList = ({ stats }) => {
    return (
        <StatsUl>
            {stats.map((stat) => (<StatisticsItem key={stat.id} label={stat.label} percentage={stat.percentage} />))}
        </StatsUl>
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

