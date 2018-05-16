function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.lenth; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArr.push(musician + ' plays ' + instrument);
  }
  return newArr;
}