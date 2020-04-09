import React from 'react'
import {HomeEventWrapper} from '../../styledComponents/HomeCalendarStyles'
import HomeEvent from '../../admin/event/HomeEvent'

const HomeCalendar = () => (
<>
<HomeEventWrapper className='HomeEvent'>
<HomeEvent />
</HomeEventWrapper>
</>
)

export default HomeCalendar;