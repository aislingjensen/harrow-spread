import { compileFile } from './node_modules/pug/lib/index.js';
import { cards } from './HarrowCards.js';

// Hooks.on("init", ()=> console.log("Aisling Hello World"));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const GenerateHarrowSpread = () => {
    const harrowSpreadGenerator = compileFile('./views/index.pug');
    shuffleArray(cards);
    return harrowSpreadGenerator(
        {
            spreadData: cards.slice(0, 9)
        }
    )
}