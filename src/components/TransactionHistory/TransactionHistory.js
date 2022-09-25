import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import { THead, Tr, Th, TBody } from './TransactionHistory.styled';
import { Box } from "components/Box";

export const TransactionHistory = ({items}) => {
    return (
        <Box m="0 auto" borderRadius="regular" width="25%"
         as="table">
            <THead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Tr>
            </THead>

            <TBody>
                {items.map((item) =>
                (<TransactionHistoryItem
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />))}
                
            </TBody>
        </Box>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
    )).isRequired,
};