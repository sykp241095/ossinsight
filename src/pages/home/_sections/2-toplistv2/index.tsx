import React  from 'react';
import Section from '../../_components/Section';
import { TopListV2 } from "./TopListV2";
import { Body, H2 } from "../../_components/typography";

export function TopListV2Section() {

  return (
    <Section maxWidth={false}>
      <a href="#trending-repos">
      <H2 id="trending-repos" sx={{ fontSize: 24, mb: 2, color:'white' }} >🔥 热门代码仓库</H2></a>
      <Body sx={{ mb: 4, mt: 2, fontSize: 14 }}>按照 Star 的增量对不同编程语言下的仓库进行排名（排除机器人）</Body>
      <TopListV2 />
    </Section>
  );
}
