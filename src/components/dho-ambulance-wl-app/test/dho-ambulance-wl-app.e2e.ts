import { newE2EPage } from '@stencil/core/testing';

describe('dho-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dho-ambulance-wl-app></dho-ambulance-wl-app>');

    const element = await page.find('dho-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
