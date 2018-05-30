import App from "./App";

describe('When App object is created', () => {
    const app = new App();

    describe('Start method', () => {
        it('Is defined', () => {
            expect(app.start).toBeDefined();
        });
    })
});
