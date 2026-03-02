import { newSpecPage } from '@stencil/core/testing';
import { DhoAmbulanceWlApp } from '../dho-ambulance-wl-app';

describe('dho-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [DhoAmbulanceWlApp],
      html: `<dho-ambulance-wl-app base-path="/"></dho-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('dho-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [DhoAmbulanceWlApp],
      html: `<dho-ambulance-wl-app base-path="/ambulance-wl/"></dho-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('dho-ambulance-wl-list');
  });
});
