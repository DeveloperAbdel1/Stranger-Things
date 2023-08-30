/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function Home({
  activeUsername,
  sessionActiveUsername,
  sessionLoggedIn
}) {
  const navigate = useNavigate();

  console.log(activeUsername, sessionActiveUsername);
  return (
    <div id="home-cont">
      <h2>Stranger&apos;s Things</h2>
    
      <div>
        {sessionLoggedIn === "true" && sessionActiveUsername !== "none" ? (
          <h3>
            Logged in as{" "}
            {activeUsername ? activeUsername : sessionActiveUsername}
          </h3>
        ) : (
          <h3>Click to log</h3>
        )}
        <button
          onClick={() => {
            sessionLoggedIn === "true"
              ? navigate("/profile")
              : navigate("/account/login");
          }}
        >
          {sessionLoggedIn === "true" ? "VIEW PROFILE" : "LOG IN"}
        </button>
      </div>
    </div>
  );
}
