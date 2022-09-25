import PropTypes from 'prop-types';
import { Title } from './Title.styled';

export const Header = ({ title }) => {
    return (
        <Title>{title}</Title>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}