import PropTypes from 'prop-types';
import { Header } from './Title/Title';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({title, stats}) => {
    return (
        <section class="statistics">
            
                {title  && <Header title="Upload stats" />}
            

            
                <StatisticsList stats={stats}/>
                
            
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string, 
        percentage: PropTypes.number,
    }))
};