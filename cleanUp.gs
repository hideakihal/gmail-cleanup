function cleanUp() {
  var threads = GmailApp.search('is:unread older_than:1d');
  for (var i = 0; i < threads.length; i++) {
    threads[i].markRead();
  }
}
