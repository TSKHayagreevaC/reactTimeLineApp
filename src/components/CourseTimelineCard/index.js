import {AiFillClockCircle} from 'react-icons/ai'

import {
  CourseCardContainer,
  CourseCardTopContainer,
  CourseCardHeading,
  CourseDurationContainer,
  CourseDurationText,
  CourseDescription,
  TagsList,
  TagsListItem,
  TagText,
} from './styledComponents'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description} = courseDetails
  return (
    <CourseCardContainer>
      <CourseCardTopContainer>
        <CourseCardHeading>{courseTitle}</CourseCardHeading>
        <CourseDurationContainer>
          <AiFillClockCircle color="#171f46" />
          <CourseDurationText>{duration}</CourseDurationText>
        </CourseDurationContainer>
      </CourseCardTopContainer>
      <CourseDescription>{description}</CourseDescription>
      <TagsList>
        {courseDetails.tagsList.map(eachItem => (
          <TagsListItem key={eachItem.id}>
            <TagText>{eachItem.name}</TagText>
          </TagsListItem>
        ))}
      </TagsList>
    </CourseCardContainer>
  )
}

export default CourseTimelineCard
