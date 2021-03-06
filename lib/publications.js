privacyOptions = { // true means exposed
  _id: true,
  commentCount: true,
  createdAt: true,
  email_hash: true,
  isInvited: true,
  karma: true,
  postCount: true,
  slug: true,
  username: true,
  friendsIds: true,
  friendsWonders: true,
  'profile.name': true,
  'profile.notifications': true,
  'profile.bio': true,
  'profile.github': true,
  'profile.site': true,
  'profile.twitter': true,
  'services.twitter.profile_image_url': true,
  'services.facebook.id': true,
  'services.facebook.name': true,
  'services.facebook.friendsIds': true,
  'services.facebook.updatedAt' :  true,
  'services.twitter.screenName': true,
  'services.github.screenName': true, // Github is not really used, but there are some mentions to it in the code
  'votes.downvotedComments': true,
  'votes.downvotedPosts': true,
  'votes.pollvotedPosts': true,
  'votes.upvotedComments': true,
  'votes.upvotedPosts': true
};
 
// minimum required properties to display avatars
avatarOptions = {
  _id: true,
  email_hash: true,
  slug: true,
  username: true,
  friendsIds: true,
  friendsWonders: true,
  'profile.name': true,
  'profile.github': true,
  'profile.twitter': true,
  'services.twitter.profile_image_url': true,
  'services.facebook.id': true,
  'services.facebook.name': true,
  'services.facebook.friendsIds': true,
  'services.facebook.updatedAt' :  true,
  'services.twitter.screenName': true,
  'services.github.screenName': true // Github is not really used, but there are some mentions to it in the code
}

// minimum required properties to display Facebook Friends
friendsOptions = {
  _id: true,
  userId: true,
  facebookName: true,
  facebookId: true,
  facebookFriendsIds: true,  
  friendsIds: true,
  createdAt: true
}

// minimum required properties to display one Facebook Friend's votes
friendVotesOptions = {
  _id: true,
  votes: true,
  'profile.name': true,
  'services.facebook.id': true,
  'services.facebook.name': true,
  slug: true,
  createdAt: true
}
