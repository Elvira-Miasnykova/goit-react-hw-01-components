import PropTypes from 'prop-types';
import { } from 'components/Statistics/StatisticsList/StatisticsItem/StatisticsItem.styled';

export const StatisticsItem = ({id, label, percentage}) => {
    return (
        <li class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
        </li>
    );
};

StatisticsItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};