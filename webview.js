const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    var unreadMails = 0;
    
    jQuery("div[aria-label*='Folder Pane']").find("span[role*='heading']:contains('Unread')").each( function(idx) {
      var currentUnreadMails = parseInt($(this).text().replace(" Unread", ""), 10);
      unreadMails += currentUnreadMails;
    });

    Franz.setBadge(unreadMails);
  }
  
  Franz.loop(getMessages);
};
