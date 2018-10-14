import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPollPercentage } from '../utils/helpers'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'

class AnsweredQuestions extends Component {
  render() {
    const { question } = this.props

    let optionOnePoll = getPollPercentage('optionOne', question)
    let optionTwoPoll = getPollPercentage('optionTwo', question)

    return (
      <div className='center'>
        <Card>
          <CardHeader
            className='card-header-user'
            title={`Posted By ${this.props.author.name}`}
            avatar = {
              <Avatar
                src={this.props.author.avatarURL}
                alt={this.props.author.name}
              />
            }
          />
          <CardContent>
            <div>
              <p className='p-text'>
                {question.optionOne.text}
                <span>{question.optionOne.votes.indexOf(this.props.authedUser) >= 0
                  ?
                    <DoneOutlinedIcon />
                  : null
                }
                </span>
              </p>
              <Table>
                <TableBody>
                  <TableCell>
                    <div>
                      <Tooltip title={`${optionOnePoll.percentage}%`}>
                        <Button disabled>{`${optionOnePoll.percentage}%`}</Button>
                      </Tooltip>
                    </div>
                    <span className='votes-text'>{`Voted By ${optionOnePoll.text}`}</span>
                  </TableCell>
                </TableBody>
              </Table>
            </div>
            <div>
              <p className='p-text'>
                {question.optionTwo.text}
                <span>{question.optionTwo.votes.indexOf(this.props.authedUser) >= 0
                  ?
                    <DoneOutlinedIcon />
                  : null
                }
                </span>
              </p>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ paddingRight: '0'}}>
                      <Tooltip title={`${optionTwoPoll.percentage}%`}>
                        <Button disabled>{`${optionTwoPoll.percentage}%`}</Button>
                      </Tooltip>
                      <span className='votes-text'>{`Voted By ${optionTwoPoll.text}`}</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users}, props) {
  return {
    authedUser: authedUser,
    question: questions[props.id],
    author: users[questions[props.id].author]
  }
}

export default connect(mapStateToProps)(AnsweredQuestions)
