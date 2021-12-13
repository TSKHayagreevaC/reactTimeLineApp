import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import {TimeLineContainer, TimeLineHeading, CcbpSpan} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineItem = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimeLineCard key={item.id} courseDetails={item} />
  }

  return (
    <TimeLineContainer>
      <TimeLineHeading>
        MY JOURNEY OF <br />
        <CcbpSpan>CCBP 4.0</CcbpSpan>
      </TimeLineHeading>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimeLineItem(eachItem))}
      </Chrono>
    </TimeLineContainer>
  )
}

export default TimelineView
