exports.addUser = (name) => {
  return {
    type: "ADD_USER",
    username: name
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