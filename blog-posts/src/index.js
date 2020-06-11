import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./image/20171218_121734.jpg";
import profile2 from "./image/20181013_160531.jpg";
import profile3 from "./image/20190102_145230.jpg";

import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Alex"
          date="Today at 5:00PM"
          message="Its amazing!"
          avatar={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sam"
          date="Yesterday at 6:00PM"
          message="Not bad!"
          avatar={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Tom"
          date="Today at 11:00AM"
          message="Could be better"
          avatar={profile3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
