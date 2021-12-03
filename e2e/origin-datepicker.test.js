describe('CompareDatePickers', () => {
    beforeAll(async () => {
        await page.goto('https://mui.com/components/date-picker/');
    }, 10000);

    const localeDate = '01/01/2011';

    describe('DatePicker on mui.com/components/date-picker/', () => {
        it('should get a date from Basic usage', async () => {
            // yes, this is fragile, but the id seemed to have changed on me
            const selector = '#main-content > div:nth-child(6) div div div input';

            // tried this several ways with same result
            // triple-click selects the whole field
            // await page.click(selector, {clickCount: 3});

            // click and then left-arrow the longest length of a date
            await page.click(selector);
            for (let i = 0; i < 10; i++) {
                await page.keyboard.press('ArrowLeft');
            }

            await page.type(selector, localeDate);
            const dateEntered = await page.$eval(selector, el => el.value);
            expect(dateEntered).toEqual(localeDate);
        })
    });

    // describe('NativePicker', () => {
    //     it('should get a date from Native Picker', async () => {
    //         const selector = '#nativePicker';
    //
    //         // in native picker, there are three fields to back up through at most
    //         await page.click(selector);
    //         for (let i = 0; i < 3; i++) {
    //             await page.keyboard.press('ArrowLeft');
    //         }
    //
    //         await page.type(selector, localeDate);
    //         const dateInForm = await page.$eval(selector, el => el.value);
    //         expect(dateInForm).toEqual(isoDate);
    //     })
    //
    // });


});
