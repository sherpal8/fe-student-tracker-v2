import React, { Component } from "react";

class List extends Component {
  state = { studentList: [] };
  render() {
    const { studentList } = this.state;
    return (
      <ul>
        {studentList.map(student => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    this.fetchStudents();
  }
  fetchStudents = () => {
    return fetch(
      "https://nc-student-tracker.herokuapp.com/api/students?graduated=false"
    )
      .then(response => response.json())
      .then(({ students }) => {
        this.setState({ studentList: students });
      });
  };
}

export default List;
