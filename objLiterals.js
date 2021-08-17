function skier(name, sound) {
    return {
        name,
        sound,
        powerYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell} ${yell}`);
        }
    };
}

console.log(skier("Bruno", "boo"));
console.log(skier("Sandy", "woo").powerYell());
