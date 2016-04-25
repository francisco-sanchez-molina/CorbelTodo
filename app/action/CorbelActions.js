import alt from '../alt';

import CorbelService from "../service/CorbelService.js"

class CorbelActions {
    
	constructor() {
		this.generateActions()
        this.corbelService = new CorbelService()
	}

    requestServerVersion() {
        return (dispatch) => {
			dispatch()
			this.corbelService.getVersions()
		}
    }

	requestLogin(profile, environment) {
		return (dispatch) => {
			dispatch()
			CorbelService.login(profile, environment)
		}
	}

}

export default alt.createActions(CorbelActions);
