import React from "react";

// Create Class Component

class test extends React.Component {
  // create constructor
  constructor() {
    super();
    this.state = {
      study: false,
    };
  }

  render() {
    let studyHard;
    if (this.state.study === true) {
      studyHard = "You will be successful";
    } else {
      studyHard = "Keep working at it ";
    }

    return <>The door of opportunity equal {studyHard}</>;
  }
}

export default test;
