const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/relasion_db")
  .then((result) => {
    console.log("conected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});
const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweet = async () => {
  const user = await User.findOne({
    username: "JohnDoe",
    age: 30,
  });

  const tweet = new Tweet({
    text: "Hello World War 3",
    likes: 0,
  });
  tweet.user = user;
  tweet.save();
};

// makeTweet();

const showTweets = async () => {
  const tweets = await Tweet.findById("6799ab4c773a569bbaf14e8f").populate("user");
  console.log(tweets);
};

showTweets();
