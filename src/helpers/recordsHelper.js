import axios from "axios";

const token = 'A7Dnukj7VK31uzvwBI9b07zU7vp2yub958OsnMzq10';
async function recordsHelper(json) {
	let result = await axios.post('https://adretaildev-olm.omnixsystem.com/v3/routes/coverages/all', json, {
		headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
	});
	return result;
}

export { recordsHelper };