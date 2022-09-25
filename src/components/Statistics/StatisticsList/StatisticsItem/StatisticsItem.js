import PropTypes from 'prop-types';
import { } from 'components/Statistics/StatisticsList/StatisticsItem/StatisticsItem.styled';
import { StatsLi, StatsLabel, StatsPercentage } from 'components/Statistics/StatisticsList/StatisticsItem/StatisticsItem.styled';

export const StatisticsItem = ({id, label, percentage}) => {
    return (
        <StatsLi>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage}%</StatsPercentage>
        </StatsLi>
    );
};

StatisticsItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};