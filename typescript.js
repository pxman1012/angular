function viewCat(c) {
    return { color: c.color || 'orange', size: c.size || 18, male: c.male || true };
}
var Strong = /** @class */ (function () {
    function Strong(name, age) {
        this.name = name;
        this.age = age;
    }
    Strong.prototype.say = function () {
        console.log('wooooooow');
    };
    return Strong;
}());
// 1 & 3 have name Strong
// 2 don't have name 
var player = new Strong('Chicken', 22); // 1
console.log(player, player.say());
var streamer = { name: 'Star', age: 44, say: function () { console.log('hiiiiiiiiii'); } }; // 2
console.log(streamer.name, streamer.age, streamer.say());
var result = new Strong('Super', 24); // 3
console.log(result, result.say());
var cat = viewCat({ color: 'yellow', male: false });
console.log(cat);
