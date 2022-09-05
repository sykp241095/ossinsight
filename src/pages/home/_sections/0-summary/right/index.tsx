import { ErrorOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import InViewContainer from '../../../../../components/InViewContainer';
import { Item } from '../../../_components/StackItem';
import { fontSizes } from '../../../_components/typography';
import Events from './Events';
import EventsChart from './EventsChart';
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";


const Subtitle = styled('p')({
  fontSize: '14px',
  color: '#C4C4C4',
  fontWeight: 'bold',
  marginBottom: '8px',
  marginTop: '16px',
})

const Strong = styled('strong')({
  color: '#47D9A1'
})

const Right = () => {
  return (
    <Item sx={[{flex: 0.618}, fontSizes.h1]}>
      <Subtitle sx={{ mt: 0 }}>
        GitHub 事件数/5秒
      </Subtitle>
      <InViewContainer>
        {show => <EventsChart show={show} />}
      </InViewContainer>
      <Subtitle>
        GitHub 上正在发生的事情 <Strong>NOW!</Strong>
        &nbsp;
        <Tooltip title='Random pick from all realtime events'>
          <ErrorOutlined fontSize='inherit' sx={{ verticalAlign: 'text-bottom' }} />
        </Tooltip>
      </Subtitle>
      <InViewContainer>
        {show => <Events show={show} />}
      </InViewContainer>
      <Box fontSize={12} mt={3}>
        <Button sx={{fontSize: 12, fontWeight: 'regular', verticalAlign: 'baseline', textDecoration: 'underline', color:'#7c7c7c'}} component={Link} href='/blog/why-we-choose-tidb-to-support-ossinsight'>
          🤖️ 我们是如何实现实时数据效果的?
        </Button>
      </Box>
    </Item>
  )
}

export default Right
