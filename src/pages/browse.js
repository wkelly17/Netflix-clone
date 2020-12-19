import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionMap } from '../utils';

export default function Browse() {
  const { series } = useContent(
    'series'
  ); /* hook conveniently written to destructure back out the parameter as the data */
  const { films } = useContent('films');
  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} />;
}
