import './App.css';
import Form from './Form';
import TeamMember from './TeamMember';
import { useState } from 'react';

const initialTeamMembers = [
  {
    name: 'John Doe',
    email: 'dummy@gmail.com',
    role: 'Software Engineer'
  }
]

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  return (
    <div className="App">
      <h1>Team Members</h1>
      {teamMembers.map((member, idx) => <TeamMember name={member.name} email={member.email} role={member.role} key={idx}/>)}
      <hr/>
      <Form setTeamMembers={setTeamMembers} teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
