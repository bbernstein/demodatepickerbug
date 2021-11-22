# Demo bug with mui DatePicker and puppeteer

In a terminal window, first set up the app:
```
yarn install
```

Next, run the react side that displays the DatePicker:

```
yarn start
```

In another terminal run the end-to-end test that tests the date picker using puppeteer:

```
yarn e2e
```

The default date is set to today.
The test will attempt to set the date to `01/01/2011`
and then expect the date to be set to that new date.

This works fine on MacOS and in any headed version of puppeteer, but it fails on linux headless.

Result on MacOS:
```
$ jest
 PASS  e2e/e2e.test.js
  DatePicker
    ✓ should get a date (488 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.372 s, estimated 2 s
Ran all test suites.
✨  Done in 2.56s.
```


Result on linux:
```
$ jest
 FAIL  e2e/e2e.test.js
  DatePicker
    ✕ should get a date (296 ms)

  ● DatePicker › should get a date

    expect(received).toEqual(expected) // deep equality

    Expected: "01/01/2011"
    Received: "11/22/2021"

      10 |         await page.type(selector, dateToEnter);
      11 |         const dateEntered = await page.$eval(selector, el => el.value);
    > 12 |         expect(dateEntered).toEqual(dateToEnter);
         |                             ^
      13 |     })
      14 | });

      at Object.<anonymous> (e2e.test.js:12:29)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.269 s, estimated 2 s
Ran all test suites.
error Command failed with exit code 1.```
