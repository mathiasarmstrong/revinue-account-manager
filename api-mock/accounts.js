var initiatives = {account:[]};
for (var i = 5; i >= 0; i--) {
  initiatives.account[i] = {name:`test${i}`, id:i}
}
module.exports = initiatives;
