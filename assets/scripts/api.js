'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

// Authenticated change password AJAX request:
const changePassword = function (formData) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
    return $.ajax({
      url: config.apiUrl + '/sign-out',
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer '  + store.user.token
      }
      })
  }
const newGame = function() {
 const data = store.user.token
return $.ajax({
  url: config.apiUrl + '/games',
  method: 'POST' ,
  headers: {
    Authorization: 'Bearer ' + store.user.token
  }
})
}
  
  


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut, 
  newGame
}