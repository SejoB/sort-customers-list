const FORM_LABELS = [
	'Company Name',
	'Contact Name',
	'Contact Title',
	'Address',
	'City',
	'Postal Code',
	'Country'
]
export const customerObject = () => {
	let tmpArr = []
	FORM_LABELS.forEach((i, key) => {
		const nameObj = i.replace(/\s/g, '')
		const inputField = {
			name: [nameObj],
			label: i,
			value: ''
		}
		tmpArr.push({ id: key, inputField })
	})

	return tmpArr
}
