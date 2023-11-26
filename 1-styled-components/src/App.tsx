import styled from 'styled-components';
import './App.css';

const BoringDiv = ({ className }: { className?: string }) => (
  <div className={className}>Lorem ipsum</div>
);

const CoolDiv = styled(BoringDiv)`
  background-color: #292929;
  color: #fff;
`;

function App() {
  return (
    <>
      <BoringDiv></BoringDiv>
      <CoolDiv></CoolDiv>
    </>
  );
}

export default App;
