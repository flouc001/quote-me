import styled from 'styled-components';

const StyledTopBar = styled.div`
  padding: 1rem;

  flex: 1 0 auto;

  background-color: ${(props) => props.theme.topBar.backgroundColor};
  color: ${(props) => props.theme.topBar.color};
  font-weight: bold;
  font-size: 1.5rem;
`;

export default StyledTopBar;
