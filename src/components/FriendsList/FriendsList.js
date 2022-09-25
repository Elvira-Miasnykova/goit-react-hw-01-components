import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Box } from 'components/Box';

export const FriendsList = ({friends}) => {
    return (
        <Box m="0 auto" borderRadius="normal" width="25%" mb={4} pt={3} pb={3}
            as="ul">
            {friends.map(friend => 
                <FriendListItem key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name} />)}
        </Box>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        {
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        }
    )).isRequired,
};