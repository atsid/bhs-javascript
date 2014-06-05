function Monsters() {
    var monsters = [
    {
        name: "Goblin",
        description: "Green, ugly, snotty.",
        img: "",
        block: 25,
        health: 15,
        damage: 2,
        level: 1,
        experience: 100
    },
    {
        name: "Zombie",
        description: "Brain hungry animated corpse.",
        img: "",
        block: 15,
        health: 8,
        damage: 1,
        level: 1,
        experience: 100
    },
    {
        name: "Zomblin",
        description: "Brain hungry animated goblin corpse.",
        img: "",
        block: 35,
        health: 20,
        damage: 5,
        level: 2,
        experience: 100
    },
    {
        name: "Big Angry Guy",
        description: "A big guy who hits hard.",
        img: "",
        block: 50,
        health: 25,
        damage: 10,
        level: 3,
        experience: 150
    }];

    this.getMonsterByName = function(name) {
        var monster = {};

        for(var index = 0; index < monsters.length; index++) {
            if (monsters[index].name === name) {
                return monsters[index];
            }
        }

        return monster;
    }

    this.getMonsterNames = function() {
        var names = [];
        for(var index = 0; index < monsters.length; index++) {
            names.push(monsters[index].name);
        }

        return names;
    }
}