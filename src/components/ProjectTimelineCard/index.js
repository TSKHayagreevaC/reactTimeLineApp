import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectCardImage,
  ProjectTitleDurationContainer,
  ProjectHeading,
  ProjectDurationContainer,
  ProjectDurationText,
  ProjectDescriptionText,
  ProjectWebsiteLink,
} from './styledComponents'

const ProjectTimeLineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  return (
    <ProjectCardContainer>
      <ProjectCardImage src={imageUrl} alt="project" />
      <ProjectTitleDurationContainer>
        <ProjectHeading>{projectTitle}</ProjectHeading>
        <ProjectDurationContainer>
          <AiFillCalendar color="#171f46" />
          <ProjectDurationText>{duration}</ProjectDurationText>
        </ProjectDurationContainer>
      </ProjectTitleDurationContainer>
      <ProjectDescriptionText>{description}</ProjectDescriptionText>
      <ProjectWebsiteLink href={projectUrl}>Visit</ProjectWebsiteLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimeLineCard
