import { PropSidebar } from '@docusaurus/plugin-content-docs';
import { useMemo } from 'react';
import { useCollections } from './useCollection';

export function useCollectionsSidebar(): PropSidebar {
  const collections = useCollections();

  return useMemo(() => collections.filter(collection => collection.public !== 0).map(collection => ({
    type: 'category',
    label: collection.name,
    href: `/collections/${collection.slug}`,
    collapsed: true,
    collapsible: true,
    items: [{
      type: 'link',
      href: `/collections/${collection.slug}`,
      label: '月度&年度排行榜'
    }, {
      type: 'link',
      href: `/collections/${collection.slug}/trends/`,
      label: '历史趋势'
    }]
  })), [collections]);
}
