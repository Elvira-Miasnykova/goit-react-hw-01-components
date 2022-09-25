import PropTypes from 'prop-types';
import { Tr, Td } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({type, amount, currency}) => {
    return (
            <Tr>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
            </Tr>
    );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};