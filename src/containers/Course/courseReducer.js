export default function courseReducer(state, action) {
    // action = { type, payload }
    switch (action.type) {
      case 'init':
        return {
          course: action.payload.course
        }
      default:
        return state;
    }
  }