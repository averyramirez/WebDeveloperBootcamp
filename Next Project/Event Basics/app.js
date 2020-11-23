

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.apend(username)
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`)
    tweetsContainer.append(newTweet);

}