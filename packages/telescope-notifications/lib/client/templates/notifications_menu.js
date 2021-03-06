Template[getTemplate('notificationsMenu')].helpers({
  notificationItem: function () {
    return getTemplate('notificationItem');
  },
  notifications: function(){
    return Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}});
  },
  hasNotifications: function () {
    return !!Herald.collection.find({userId: Meteor.userId(), read: false}, {sort: {timestamp: -1}}).count();    
  },
  notificationCount: function(){
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0){
      return '<i class="alarm outline icon"></i>';
    // }else if(notifications.length==1){
    //   return __('1_notification');
    }else{
      return '<i class="alarm icon"></i>'+ ' ' +' <a class="ui green circular label">'+ notifications.length + '</a>';
    }
  },
  notification_class: function(){
    var notifications=Herald.collection.find({userId: Meteor.userId(), read: false}).fetch();
    if(notifications.length==0)
      return 'no-notifications';
  }
});

Template[getTemplate('notificationsMenu')].events({
  'click .notifications-toggle': function(e){
    e.preventDefault();
    $('body').toggleClass('notifications-open');
  },
  'click .mark-as-read': function(){
    Meteor.call('heraldMarkAllAsRead', 
      function(error, result){
        error && console.log(error);
      }
    );
  }
});
