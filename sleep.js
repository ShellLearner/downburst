//A nice sleep function! Taken from user
//https://stackoverflow.com/users/1269037/dan-dascalescu
//in stackoverflow.
// WARNING: only works in an async function!

module.exports = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
