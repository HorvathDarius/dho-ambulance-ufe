import { newE2EPage } from '@stencil/core/testing';

describe('dho-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dho-ambulance-wl-list></dho-ambulance-wl-list>');

    const element = await page.find('dho-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
