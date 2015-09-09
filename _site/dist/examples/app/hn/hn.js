import {Promise} from 'angular2/src/facade/async';
var APIUrl = 'https://hacker-news.firebaseio.com/v0/';
export class HackerNewsClient {
  constructor() {}
  getTopStories(cb) {
    console.log('GETTING TOP STORIES');
    this.fb.child('topstories').on('value', (snapshot) => {
      let items = snapshot.val();
      console.log('Fetched', items.length, 'items');
      for (var itemID of items) {
        this.fb.child("item").child(itemID).on('value', (data) => {
          cb(data.val());
        });
      }
    });
  }
}
var HackerNews = new HackerNewsClient();
export {HackerNews};
