describe('CompareDatePickers', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    const isoDate = '2011-01-01';
    const localeDate = '01/01/2011';

    describe('DatePicker', () => {
        it('should get a date from a DatePicker', async () => {
            const selector = '#datePicker';
            await page.click(selector);
//            await page.click(selector, { clickCount: 3 });
            for (let i=0; i<10; i++) {
                await page.keyboard.press('ArrowLeft');
            }
            await page.type(selector, localeDate);
            const dateEntered = await page.$eval(selector, el => el.value);
            expect(dateEntered).toEqual(localeDate);
        })
    });

    describe('NativePicker', () => {
        it('should get a date from Native Picker', async () => {
            const selector = '#nativePicker';
            await page.click(selector);
            for (let i=0; i<3; i++) {
                await page.keyboard.press('ArrowLeft');
            }
            await page.type(selector, localeDate);
            const dateInForm = await page.$eval(selector, el => el.value);
            expect(dateInForm).toEqual(isoDate);
        })

    });


});