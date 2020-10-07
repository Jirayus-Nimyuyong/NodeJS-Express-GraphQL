const users = []

const createUser = (args) => {
  try {
    const user = {
      _id: Math.random().toString(),
      code: args.userInput.code,
      name: args.userInput.name,
      password: args.userInput.password,
      type: args.userInput.type,
      mobilePhone: args.userInput.mobilePhone,
      email: args.userInput.email
    }
    users.push(user)
    return user
  } catch (error) {
    console.log(error)
  }
}

const getUser = () => {
  try {
    return users
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUser,
  createUser
}
