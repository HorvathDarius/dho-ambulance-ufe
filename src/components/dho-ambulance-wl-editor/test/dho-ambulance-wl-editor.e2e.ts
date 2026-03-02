import { newE2EPage } from '@stencil/core/testing';

describe('dho-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dho-ambulance-wl-editor></dho-ambulance-wl-editor>');

    const element = await page.find('dho-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
