export default function postRequest(url, op, obj, cb) {
	const req = new XMLHttpRequest()
	req.onload = function() {
		cb(req.response)
	}
	req.open('POST', url)
	req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
	req.setRequestHeader('authorization', localStorage.token)
	req.send(JSON.stringify({
		'op': op,
		'data': obj
	}))
}

export function getRequest(url, op, obj, cb) {
	const req = new XMLHttpRequest()
	req.onload = function() {
		cb(req.response)
	}
	req.open('GET', url)
	req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
	req.setRequestHeader('authorization', localStorage.token)
	req.send()
}

export function fetchRequest(url, op, obj, cb) {
	fetch(url, {
		method: "POST",
		mode: "no-cors",
		credentials: 'include',
		cache: 'reload',
		headers: {
			"Accept": "application/json;charset=utf-8",
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({
			'op': op,
			'data': obj
		}),
	}).then(function(res) {
		console.log("fetch response:", res);
		cb(res);
		// $(xml).find("taxrate")
	}).catch(function(e) {
		console.log("fetch fail");
	});
}