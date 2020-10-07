const events = []

const createEvent = (args) => {
  try {
    const event = {
      _id: Math.random().toString(),
      code: args.eventInput.code,
      name: args.eventInput.name
    }
    events.push(event)
    return event
  } catch (error) {
    console.log(error)
  }
}

const getEvent = () => {
  try {
    return events
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createEvent,
  getEvent
}
