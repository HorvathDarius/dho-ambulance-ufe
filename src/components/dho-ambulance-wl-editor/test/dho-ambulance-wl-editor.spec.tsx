import { newSpecPage } from '@stencil/core/testing';
import { DhoAmbulanceWlEditor } from '../dho-ambulance-wl-editor';

describe('Dho-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [DhoAmbulanceWlEditor],
      html: `<dho-ambulance-wl-editor entry-id="@new"></dho-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll('md-filled-button');
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll('md-outlined-button');
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll('md-filled-tonal-button');
    expect(items.length).toEqual(1);
  });
});
