function cat () {

}

cat.prototype.makeSound = function () {
    return this.sound;
}

const mark = new cat();
mark.sound = "meowww";

const waffles = new cat();
waffles.sound = "im dead";


console.log(mark.makeSound() + waffles.makeSound());