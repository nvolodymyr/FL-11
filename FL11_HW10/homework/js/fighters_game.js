function Fighter(init) {
    let name = init.name;
    let damage = init.damage;
    let hp = init.hp;
    let agility = init.agility;
    let wins = 0;
    let loses = 0;
    let maxMagicNumber = 100;
    this.getName = function() {
        return name;
    }
    this.getDamage = function() {
        return damage;
    }
    this.getAgility = function() {
        return agility;
    }
    this.getHealth = function() {
        return hp;
    }
    this.dealDamage = function(damageToOponent) {
        if (hp > 0 && hp > damageToOponent) {
            hp -= damageToOponent
        } else {
            hp = 0;
        }
    }

    this.addWin = function() {
        let sum = wins += 1;
        return sum;
    }
    this.addLoss = function() {
        let sum = loses += 1;

        return sum;
    }
    this.attack = (newObjectFighter) => {
        let half = 0.5;
        let luckyStrikeRandom = Math.floor(Math.random() * (maxMagicNumber * half));
        console.log('luckyStrikeRandom:', luckyStrikeRandom);
        if (luckyStrikeRandom > this.getAgility()) {
            newObjectFighter.dealDamage(this.getDamage());
            console.log(`${name} make ${damage} damage to ${newObjectFighter.getName()}`);
        } else {
            console.log(`${name} attacked missed`);
        }
    }

    this.logCombatHistory = function() {
        console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loses}`);

    }
    this.heal = function(number) {
        if (hp - number < maxMagicNumber) {
            hp = 0;
        } else {
            hp -= number;
        }
    }



}

function battle(obj1, obj2) {
    if (obj1.getHealth() === 0) {
        console.log(`${obj1.getName()} is dead and can not fight...`);
    } else if (obj2.getHealth() === 0) {
        console.log(`${obj2.getName()} is dead and can not fight...`);
    } else {
        let triger = true;
        while (obj1.getHealth() !== 0 && obj2.getHealth() !== 0) {
            if (triger) {
                obj1.attack(obj2);
                triger = false;
                console.log(obj1.getHealth(), obj2.getHealth());
            } else {
                obj2.attack(obj1);
                triger = true;
                console.log(obj1.getHealth(), obj2.getHealth());
            }
        }
        if (obj1.getHealth() === 0) {
            obj2.addWin();
            obj1.addLoss();
            console.log(`${obj2.getName()} is winner. ura...!`);
        } else {
            obj1.addWin();
            obj2.addLoss();
            console.log(`${obj1.getName()} is winner. ura...`);

        }
    }
}
const myFighter = new Fighter({ name: 'John', damage: 20, hp: 100, agility: 25 });
const myFighter1 = new Fighter({ name: 'Sally', damage: 20, hp: 100, agility: 25 });
battle(myFighter, myFighter1);