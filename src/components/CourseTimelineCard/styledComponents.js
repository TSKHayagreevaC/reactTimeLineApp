import styled from 'styled-components/macro'

export const CourseCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const CourseCardTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

export const CourseCardHeading = styled.h1`
  margin: 0px;
  font-size: 14px;
  font-family: 'Roboto';
  line-height: 1.1;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const CourseDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 30%;
  }
`

export const CourseDurationText = styled.p`
  margin: 3px;
  font-family: 'Roboto';
  font-size: 8px;
  font-weight: bold;
  color: #171f46;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const CourseDescription = styled.p`
  margin: 3px 0px 3px 0px;
  font-family: 'Roboto';
  font-size: 12px;
  color: #2b237c;
  line-height: 1;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
    margin: 10px 0px 10px 0px;
  }
`

export const TagsList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const TagsListItem = styled.li`
  list-style-type: none;
`

export const TagText = styled.p`
  background-color: #e6e6fa;
  color: #171f46;
  border-radius: 3px;
  margin: 2px;
  padding: 3px;
  font-family: 'Roboto';
  font-weight: bold;
`
