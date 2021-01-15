import axios from "axios";


async function recordsHelper(json) {
	let result = await axios.post('https://adretaildev-olm.omnixsystem.com/v3/routes/coverages/all', json, {
		headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer A7Dnukj7VK31uzvwBI9b07zU7vp2yub958OsnMzq10'
        }
	});
	return result;
}

export { recordsHelper };