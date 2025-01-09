function checkTime(req, res, next) {
  const date = new Date();
  const hour = date.getHours();

  if(hour > 23 || hour < 18 ){
    return res.send('Server chiuso');
  }
  next();
}
module.exports = checkTime;
