import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendsList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map(friend => 
                <FriendListItem key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name} />)}
        </ul>
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