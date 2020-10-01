interface Pxman {
    name: string;
    age: number;
    say(): void;
}

interface Cat {
    color?: string;
    size?: number;
    male?: boolean;
}

function viewCat(c: Cat): { color: string; size: number; male: boolean; } {
    return { color: c.color || 'orange', size: c.size || 18, male: c.male || true }

}

class Strong {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }

    say(): void {
        console.log('wooooooow');
    }

}

// 1 & 3 have name Strong
// 2 don't have name 
const player = new Strong('Chicken', 22); // 1
console.log(player, player.say());
const streamer: Pxman = { name: 'Star', age: 44, say(): void { console.log('hiiiiiiiiii'); } }; // 2
console.log(streamer.name, streamer.age, streamer.say());
const result: Pxman = new Strong('Super', 24); // 3
console.log(result, result.say());

let cat = viewCat({ color: 'yellow', male: false });
console.log(cat);
