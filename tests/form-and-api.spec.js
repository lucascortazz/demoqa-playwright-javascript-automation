const { test, expect } = require('@playwright/test');

test('validates text box form and API response', async ({ page, request }) => {
  const formData = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    currentAddress: '123 Main St',
    permanentAddress: '456 Secondary St'
  };

  await test.step('Fill and submit the DemoQA text box form', async () => {
    await page.goto('https://demoqa.com/text-box');

    await page.locator('#userName').fill(formData.fullName);
    await page.locator('#userEmail').fill(formData.email);
    await page.locator('#currentAddress').fill(formData.currentAddress);
    await page.locator('#permanentAddress').fill(formData.permanentAddress);
    await page.locator('#submit').click();
  });

  await test.step('Validate submitted values in the output section', async () => {
    await expect(
      page.locator('#output'),
      'Expected output section to be visible after submitting the form'
    ).toBeVisible();

    await expect(
      page.locator('#name'),
      'Expected output name to match submitted full name'
    ).toContainText(formData.fullName);

    await expect(
      page.locator('#email'),
      'Expected output email to match submitted email'
    ).toContainText(formData.email);

    await expect(
      page.locator('p#currentAddress'),
      'Expected output current address to match submitted current address'
    ).toContainText(formData.currentAddress);

    await expect(
      page.locator('p#permanentAddress'),
      'Expected output permanent address to match submitted permanent address'
    ).toContainText(formData.permanentAddress);
  });

  await test.step('Validate public API response', async () => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toEqual(
      expect.objectContaining({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        body: expect.any(String)
      })
    );

    expect(responseBody.id).toBe(1);
  });

  console.log('All tests passed.');
});
