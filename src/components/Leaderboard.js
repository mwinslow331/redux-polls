import React from 'react';
import { connect } from 'react-redux';

function Leaderboard ({ users }) {
  console.log('users', users)
  return (
    <ul>
      {users.map((user) => (
        <li className='user' key={user.id}>
          <img src={user.avatarURL} alt={'Avatar for: ${user.name}'} />
          <div>
            <h1 className='userprofile' text='bold'>{user.name}</h1>
            <p>{user.answers} Answers</p>
            <p>{user.polls} Polls</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users)
      .map((id) => {
        const { name, avatarURL, answers, polls } = users[id]

        return {
          id,
          name,
          avatarURL,
          polls: polls.length,
          answers: answers.length,
        }
      })
      .sort((a,b) => b.polls + b.answers > a.polls + a.answers)
  }
}

export default connect(mapStateToProps)(Leaderboard);
