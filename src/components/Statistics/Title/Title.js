import PropTypes from 'prop-types';
//import { Title } from './Title.styled';

export const Header = ({ title }) => {
    return (
        <h2>{title}</h2>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}