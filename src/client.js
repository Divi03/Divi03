import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_sanityProjectId,
  dataset: process.env.REACT_APP_sanitydataset,
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_sanityToken,
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
