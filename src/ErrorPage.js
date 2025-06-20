import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjhtdW9rNGtwdWs2ZGJsMXl1dHVmaGQ1M3Bmb3puaXhsbmxtdWd6dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lqFHf5fYMSuKcSOJph/giphy.gif"
            alt="404 error"
            className="error-gif"
          />

          {/* 
          https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif

          Astronaut Lost in Space https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif
          
          Confused Travolta (Classic) https://media.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif
          
          404 Glitch Animation
          https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif
          
          Dog in Fire ("This is fine")
          https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif
          
          Minions 404 Confusion
          https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif */}

          <h2>404</h2>
          <h3>Oops! Page Not Found</h3>
          <p>
            The page you’re looking for doesn’t exist or has been moved. Let’s
            get you back home!
          </p>
          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 8rem 2rem;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f9fbfd, #eef3f8);
  }

  .content {
    text-align: center;
    max-width: 600px;
    padding: 4rem;
    border-radius: 12px;
  }

  .error-gif {
    max-width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 6rem;
    color: #3a4a58;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2.4rem;
    color: #2c3741;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.6rem;
    color: #555;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
`;

export default ErrorPage;
