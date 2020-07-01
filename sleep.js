//A nice sleep function! Taken from user
//https://stackoverflow.com/users/1269037/dan-dascalescu
//in stackoverflow.

module.exports = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
