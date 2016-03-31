'use strict'
const express = require('express')
const hookRouter = express.Router()
const ai = require('./ai')

hookRouter.post('/cepaveai', (req, res)=> {
//  send to OWL Dev私密小世界
//  ai.sendMessage(-113258008, `testing owl-portal git pushed`)
//  // Rocky
//  ai.sendMessage(169050877, `testing owl-portal git pushed`)

  try {
    const userName = req.body.user_name
    const userEmail = req.body.user_email
    const lastCommit = req.body.commits.slice(-1)[0]
    const lastCommitHash = lastCommit.id
    const lastCommitMessage = lastCommit.message
    const lastCommitUrl = lastCommit.url

    const msg = `${userName} <${userEmail}>
${lastCommitMessage}
${lastCommitUrl}
    `
  //  send to Cepave Tech
    ai.sendMessage(-10613384, msg)
  } catch (er) {
    console.log(er)
  }

  res.send(req.body)
})

module.exports = hookRouter
