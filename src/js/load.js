let response, jsonData;

console.log(response);

function hideElement(id) {
    document.getElementById(id).classList.add("display-none");
}



function showElement(id) {
    document.getElementById(id).classList.remove("display-none");
}

function green(id) {
    document.getElementById(id).classList.add("up");
}

function formatNumber(number) {
    let formattedNumber = number;
    if(number >= 10000) {
        formattedNumber = ("" + number).slice(0, 2)
            + "K"
    }
    if(number >= 100000) {
        formattedNumber = ("" + number).slice(0, 3)
            + "K"
    }
    if(number >= 1000000) {
        formattedNumber = ("" + number).slice(0, 1)
            + "M"
    }
    if(number >= 10000000) {
        formattedNumber = ("" + number).slice(0, 2)
            + "M"
    }

    return formattedNumber;
}
async function getData() {

    response = await fetch("/data/json/user-data.json");
    jsonData = await response.json();

    console.log(jsonData);
    let totalSubscribers =
    jsonData.facebook.followers +
    jsonData.twitter.followers +
    jsonData.instagram.followers +
    jsonData.youtube.subscribers;

    document.getElementById("follower-count").innerHTML
    = totalSubscribers.toLocaleString("en-US");

    //Facebook
    //Main Card
    document.getElementById("facebook-username").innerHTML = 
        jsonData.facebook.username; //Sets the facebook username in main card
    document.getElementById("facebook-followers").innerHTML = 
        formatNumber(jsonData.facebook.followers); //Sets the number of followers in main card

    //Followers Increase/Decrease
    if(jsonData.facebook.followers_change > 0) { //Checks if Followers increase or decrease
        green("facebook-followers-increase"); //Sets it to green if increase (red by default)
        hideElement("facebook-down-arrow"); //hides the down arrow
        showElement("facebook-up-arrow"); //shows the up arrow
    } else {
        hideElement("facebook-up-arrow"); //if its negative, shows down arrow
        showElement("facebook-down-arrow"); //shows up arrow
    }

    document.getElementById("facebook-followers-increase-number") //Change document to match
        .innerHTML = formatNumber(Math.abs(jsonData.facebook.followers_change))
    //Page Views
    document.getElementById("facebook-page-views")
        .innerHTML = formatNumber(jsonData.facebook.page_views)

    if(jsonData.facebook.page_views_change > 0) {
        green("facebook-page-views-change");
        hideElement("facebook-page-views-down-arrow");
        showElement("facebook-page-views-up-arrow");
    } else {
        hideElement("facebook-page-views-up-arrow");
        showElement("facebook-page-views-down-arrow");
    }

    document.getElementById("facebook-page-views-change")
        .innerHTML = formatNumber(Math.abs(jsonData.facebook.page_views_change)) + "%";
    //Likes
    document.getElementById("facebook-likes")
        .innerHTML = formatNumber(jsonData.facebook.likes)

    if(jsonData.facebook.likes_change > 0) {
        green("facebook-likes-change");
        hideElement("facebook-likes-down-arrow");
        showElement("facebook-likes-up-arrow");
    } else {
        hideElement("facebook-likes-up-arrow");
        showElement("facebook-likes-down-arrow");
    }

    document.getElementById("facebook-likes-change")
        .innerHTML = formatNumber(Math.abs(jsonData.facebook.likes_change)) + "%"

    //Twitter
    //Main Card
    document.getElementById("twitter-username").innerHTML = 
        jsonData.twitter.username; //Sets the facebook username in main card
    document.getElementById("twitter-followers").innerHTML = 
        formatNumber(jsonData.twitter.followers); //Sets the number of followers in main card
    //Followers Increase/Decrease
    if(jsonData.twitter.followers_change > 0) { //Checks if Followers increase or decrease
        green("twitter-follower-increase"); //Sets it to green if increase (red by default)
        hideElement("twitter-down-arrow"); //hides the down arrow
        showElement("twitter-up-arrow"); //shows the up arrow
    } else {
        hideElement("twitter-up-arrow"); //if its negative, shows down arrow
        showElement("twitter-down-arrow"); //shows up arrow
    }

    document.getElementById("twitter-follower-increase-number") //Change document to match
        .innerHTML = formatNumber(Math.abs(jsonData.twitter.followers_change))
    //Likes
    document.getElementById("twitter-likes")
        .innerHTML = formatNumber(jsonData.twitter.likes);

    if(jsonData.twitter.likes_change > 0) {
        green("twitter-likes-change");
        hideElement("twitter-likes-down-arrow");
        showElement("twitter-likes-up-arrow");
    } else {
        hideElement("twitter-likes-up-arrow");
        showElement("twitter-likes-down-arrow");
    }

    document.getElementById("twitter-likes-change")
        .innerHTML = formatNumber(Math.abs(jsonData.twitter.likes_change)) + "%";

    //Retweets
    document.getElementById("twitter-retweets")
        .innerHTML = formatNumber(jsonData.twitter.retweets)

    if(jsonData.twitter.retweets_change > 0) {
        green("twitter-retweets-change");
        hideElement("twitter-retweets-down-arrow");
        showElement("twitter-retweets-up-arrow");
    } else {
        hideElement("twitter-retweets-up-arrow");
        showElement("twitter-retweets-down-arrow");
    }

    document.getElementById("twitter-retweets-change")
        .innerHTML = formatNumber(Math.abs(jsonData.twitter.retweets_change)) + "%"

    //Instagram
    //Main Card
    document.getElementById("instagram-username").innerHTML = 
        jsonData.instagram.username; //Sets the facebook username in main card
    document.getElementById("instagram-followers").innerHTML = 
        formatNumber(jsonData.instagram.followers); //Sets the number of followers in main card
    //Followers Increase/Decrease
    if(jsonData.instagram.followers_change > 0) { //Checks if Followers increase or decrease
        green("instagram-follower-increase"); //Sets it to green if increase (red by default)
        hideElement("instagram-down-arrow"); //hides the down arrow
        showElement("instagram-up-arrow"); //shows the up arrow
    } else {
        hideElement("instagram-up-arrow"); //if its negative, shows down arrow
        showElement("instagram-down-arrow"); //shows up arrow
    }

    document.getElementById("instagram-follower-increase-number") //Change document to match
        .innerHTML = formatNumber(Math.abs(jsonData.instagram.followers_change))
    //Likes
    document.getElementById("instagram-likes")
        .innerHTML = formatNumber(jsonData.instagram.likes)

    if(jsonData.instagram.likes_change > 0) {
        green("instagram-likes-change");
        hideElement("instagram-likes-down-arrow");
        showElement("instagram-likes-up-arrow");
    } else {
        hideElement("instagram-likes-up-arrow");
        showElement("instagram-likes-down-arrow");
    }

    document.getElementById("instagram-likes-change")
        .innerHTML = formatNumber(Math.abs(jsonData.instagram.likes_change)) + "%";

    //Profile Views
    document.getElementById("instagram-profile-views")
        .innerHTML = formatNumber(jsonData.instagram.profile_views)

    if(jsonData.instagram.profile_views_change > 0) {
        green("instagram-profile-views-change");
        hideElement("instagram-profile-views-down-arrow");
        showElement("instagram-profile-views-up-arrow");
    } else {
        hideElement("instagram-profile-views-up-arrow");
        showElement("instagram-profile-views-down-arrow");
    }

    document.getElementById("instagram-profile-views-change")
        .innerHTML = formatNumber(Math.abs(jsonData.instagram.profile_views_change)) + "%"

    //Youtube
    //Main Card
    document.getElementById("youtube-username").innerHTML = 
    jsonData.youtube.username; //Sets the facebook username in main card
    document.getElementById("youtube-subscribers").innerHTML = 
    formatNumber(jsonData.youtube.subscribers); //Sets the number of followers in main card
    //Followers Increase/Decrease
    if(jsonData.youtube.subscribers_change > 0) { //Checks if Followers increase or decrease
    green("youtube-follower-increase"); //Sets it to green if increase (red by default)
    hideElement("youtube-down-arrow"); //hides the down arrow
    showElement("youtube-up-arrow"); //shows the up arrow
    } else {
    hideElement("youtube-up-arrow"); //if its negative, shows down arrow
    showElement("youtube-down-arrow"); //shows up arrow
    }

    document.getElementById("youtube-follower-increase-number") //Change document to match
    .innerHTML = formatNumber(Math.abs(jsonData.youtube.subscribers_change))
    //Likes
    document.getElementById("youtube-likes")
    .innerHTML = formatNumber(jsonData.youtube.likes)

    if(jsonData.youtube.likes_change > 0) {
    green("youtube-likes-change");
    hideElement("youtube-likes-down-arrow");
    showElement("youtube-likes-up-arrow");
    } else {
    hideElement("youtube-likes-up-arrow");
    showElement("youtube-likes-down-arrow");
    }

    document.getElementById("youtube-likes-change")
    .innerHTML = formatNumber(Math.abs(jsonData.youtube.likes_change)) + "%";

    //Total Views
    document.getElementById("youtube-total-views")
    .innerHTML = formatNumber(jsonData.youtube.total_views)

    if(jsonData.youtube.total_views_change > 0) {
    green("youtube-total-views-change");
    hideElement("youtube-total-views-down-arrow");
    showElement("youtube-total-views-up-arrow");
    } else {
    hideElement("youtube-total-views-up-arrow");
    showElement("youtube-total-views-down-arrow");
    }

    document.getElementById("youtube-total-views-change")
    .innerHTML = formatNumber(Math.abs(jsonData.youtube.total_views_change)) + "%"
}

getData();


