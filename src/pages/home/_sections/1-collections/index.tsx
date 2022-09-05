import React from 'react'
import Section from '../../_components/Section';
import Collections from "./Collections";
import { H2, Body } from "../../_components/typography";

export function CollectionsSection () {
  return (
    <Section darker maxWidth={false}>
      <H2 sx={{ fontSize: 24 }}>📖 热门技术领域</H2>
      <Body sx={{ mb: 4, mt: 2, fontSize: 14 }}>某个技术领域的仓库分析，每月排行，和历年排行榜</Body>
      <Collections />
    </Section>
  )
}