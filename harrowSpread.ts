import { compileFile } from 'pug';

const HarrowSpread = () => {
    const harrowSpread = compileFile('./views/index.pug');
    const foo = fetch('./HarrowCards.json').then(response => response.json);
    console.log(foo);
    console.log(harrowSpread({
        spreadData: [{ id: 11, description: 'Lorem Ipsum' }, { id: 2, description: 'Lorem Ipsum' }, { id: 38, description: 'Lorem Ipsum' }, { id: 0, description: 'Lorem Ipsum' }, { id: 48, description: 'Lorem Ipsum' }, { id: 27, description: 'Lorem Ipsum' }, { id: 22, description: 'Lorem Ipsum' }, { id: 14, description: 'Lorem Ipsum' }, { id: 9, description: 'Lorem Ipsum' }]
    }));
}

HarrowSpread();

export { HarrowSpread };