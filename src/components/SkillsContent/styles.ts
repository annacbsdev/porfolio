import styled from 'styled-components'

export const StyledSkillsContent = styled.div`
  > ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: normal;
  }

  .skillList {
    display: flex;
    margin-top: 12px;
    li {
      border: 1px solid grey;
      border-radius: 8px;
      width: 80px;
      padding: 8px;
      margin-right: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 12px;
      }
      span {
        size: 16px;
      }
    }
  }
`
