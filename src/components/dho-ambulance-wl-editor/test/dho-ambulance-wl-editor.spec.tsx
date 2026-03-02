import { newSpecPage } from '@stencil/core/testing';
import { DhoAmbulanceWlEditor } from '../dho-ambulance-wl-editor';

describe('dho-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DhoAmbulanceWlEditor],
      html: `<dho-ambulance-wl-editor></dho-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <dho-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dho-ambulance-wl-editor>
    `);
  });
});
