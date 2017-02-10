//
//  avatarCounterClientScript.js
// 
//  This script counts the avatar in a domain and displays the number on a given text entity.
//  For best result, make sure that only one client is running this script.
//	
//  Created by Faye Li on 3 Feb 2017.
//  Copyright 2017 High Fidelity, Inc.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

(function() { 
	// Replace the ID here with the text entity's ID in your domain
	var textEntityID = "{aa14c26c-e43a-4e49-9c5e-1ff51c9078cc}";
	var INTERVAL_MS = 1000; // in ms, how often do we recount avatars
	var intervalID = Script.setInterval(function() {
		var avatarCount = AvatarList.getAvatarIdentifiers().length;
		Entities.editEntity(textEntityID, {text: avatarCount});
	}, INTERVAL_MS);

	function cleanup() {
		Script.clearInterval(intervalID);
    }
    Script.scriptEnding.connect(cleanup);
}()); 