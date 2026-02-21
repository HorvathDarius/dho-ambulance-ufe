import { newSpecPage } from '@stencil/core/testing';
import { DhoAmbulanceWlList } from '../dho-ambulance-wl-list';

describe('dho-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DhoAmbulanceWlList],
      html: `<dho-ambulance-wl-list></dho-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as DhoAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
