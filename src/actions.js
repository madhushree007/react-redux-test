exports.addUser = (name) => {
  return {
    type: "ADD_USER",
    username: name
  }
}
exports.logOut = () => {
  return {
    type: "USER_LOGOUT"
  }
}
exports.setCardFlip = (isCardFlipped) => {
  return {
    type: "SET_FLIPPED",
    isCardFlipped
  }
}
exports.setUserPoint = () => {
  return {
    type: "SET_USER_POINT"
  }
}
exports.setBotPoint = () => {
  return {
    type: "SET_BOT_POINT"
  }
}
exports.setGameLeft = () => {
  return {
    type: "SET_GAME_LEFT"
  }
}
exports.resetGameLeft = () => {
  return {
    type: "RESET_GAME_LEFT"
  }
}
exports.resetUserPoints = () => {
  return {
    type: "RESET_USER_POINTS"
  }
}
exports.resetBotPoints = () => {
  return {
    type: "RESET_BOT_POINTS"
  }
}