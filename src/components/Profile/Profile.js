import PropTypes from 'prop-types';
import { UserImage, UserName, UserTag, UserLocation, UserStatsItem, UserStatsLabel, UserStatsQuantity } from './Profile.styled';
import { Box } from 'components/Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Box m="0 auto" borderRadius="regular" width="25%" mb={4}>
            <Box  display="flex" flexDirection="column" alignItems="center" pt={4} pb={4}  >
                <UserImage
                    src={avatar}
                    alt={username}
                    
                />
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </Box>

            {/* Box */}
            <Box display="flex" justifyContent="space-around" pt={3} pb={3}
                as="ul"> 
                <UserStatsItem>
                    <UserStatsLabel>Followers</UserStatsLabel>
                    <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
                </UserStatsItem>
                <UserStatsItem>
                    <UserStatsLabel>Views</UserStatsLabel>
                    <UserStatsQuantity>{stats.views}</UserStatsQuantity>
                </UserStatsItem>
                <UserStatsItem>
                    <UserStatsLabel>Likes</UserStatsLabel>
                    <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
                </UserStatsItem>
            </Box>
        </Box>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
    // followers: PropTypes.number.isRequired,
    // views: PropTypes.number.isRequired,
    // likes: PropTypes.number.isRequired,
};