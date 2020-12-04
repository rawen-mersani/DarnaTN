import createMemberSuccess from '../actions/member.actions'
import * as actions from '../actions/member.actions'
import * as types from '../actions/types'

describe('actions', () => {
  it('should create an action to add a member', () => {
    const member = {
        username: "aaa",
        nom: "aaa",
        prenom: "aaa",
        email:  "aa@gmail.com" ,
        date: "1996-06-06",
        enabled: false,
        mdp : "123",
        fonction : 1
    }
    const expectedAction = {
      type: types.ADD_MEMBER_SUCCESS,
      member
    }
    const data = actions.createMemberSuccess(member).payload
    
    // expect(actions.createMemberSuccess(member)).toEqual(expectedAction)
    expect(data).toEqual(expectedAction.member)
  })
})