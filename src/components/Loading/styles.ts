import styled, { keyframes } from "styled-components";

const spin3D = keyframes`
    from {
      transform: rotate3d(.5,.5,.5, 720deg);
    }
    to{
      transform: rotate3d(0deg);
    }
`;

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 0 auto;
  width: 300px;
  height: 300px;

  background-color: transparent;
`;

const LeoBorderOne = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
    0deg,
    rgba(63, 249, 220, 0.1) 33%,
    rgba(63, 249, 220, 1) 100%
  );
  animation: ${spin3D} 1.8s linear 0s infinite;
`;

const LeoCoreOne = styled.div`
  width: 100%;
  height: 100%;
  background-color: #37474faa;
  border-radius: 50%;
`;

const LeoBorderTwo = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(251, 91, 83);
  background: linear-gradient(
    0deg,
    rgba(251, 91, 83, 0.1) 33%,
    rgba(251, 91, 83, 1) 100%
  );
  animation: ${spin3D} 2.2s linear 0s infinite;
`;

const LeoCoreTwo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d2630aa;
  border-radius: 50%;
`;

export { SpinnerBox, LeoBorderOne, LeoCoreOne, LeoBorderTwo, LeoCoreTwo };
