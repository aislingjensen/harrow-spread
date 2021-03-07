import { compileFile } from 'pug';
import { cards } from './HarrowCards.js';

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

GenerateHarrowSpread();

export { GenerateHarrowSpread };