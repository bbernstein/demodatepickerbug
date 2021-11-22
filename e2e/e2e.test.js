describe('DatePicker', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3001');
    });

    it('should get a date', async () => {
        const dateToEnter = '11/11/2011';
        const selector = 'input';
        await page.click(selector, { clickCount: 3 });
        await page.type(selector, dateToEnter);
        const dateEntered = await page.$eval(selector, el => el.value);
        expect(dateEntered).toEqual(dateToEnter);
    })
});