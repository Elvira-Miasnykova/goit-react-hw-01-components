import PropTypes from 'prop-types';
import { Header } from './Title/Title';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Box } from "components/Box";

export const Statistics = ({title, stats}) => {
    return (
        <Box m="0 auto" borderRadius="regular" width="30%" mb={4}
            as="section">
            {title  && <Header title={title} />}
            <StatisticsList stats={stats}/>
        </Box>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string, 
        percentage: PropTypes.number,
    }))
};