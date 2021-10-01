import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProjectCardImage = styled.img`
  width: 100%;
  border-radius: 8px;
`

export const ProjectTitleDurationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ProjectHeading = styled.h1`
  margin: 3px 0px 3px 0px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin: 10px 0px 10px 0px;
    font-size: 28px;
  }
`

export const ProjectDurationContainer = styled.div`
  display: flex;
  flex-direction: row
  justify-content: center;
  align-items: center;
`
export const ProjectDurationText = styled.p`
margin: 3px 0px 3px 3px;
font-size; 14px;
font-weight: bold;
line-height: 1;
@media screen and (min-width: 768px) {
    margin: 10px 0px 10px 10px;
    font-size: 24px;
}
`

export const ProjectDescriptionText = styled.p`
  margin: 3px 0px 3px 0px;
  line-height: 1;
  font-size: 12px;
  color: #171f46;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const ProjectWebsiteLink = styled.a`
  font-size: 14px;
  align-self: flex-start;
  font-family: 'Roboto';
  margin: 0px;
  color: #0967d2;
  font-weight: bold;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-top: 5px;
  }
`
