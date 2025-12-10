export default function orderByProps(obj, order) {
	const orderedProps = []
	const restProps = []

	// добавляем свойства в заданном порядке
	for (const key of order) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			orderedProps.push({ key, value: obj[key] })
		}
	}

	// собираем остальные свойства через for...in
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key) && !order.includes(key)) {
			restProps.push({ key, value: obj[key] })
		}
	}

	restProps.sort((a, b) => a.key.localeCompare(b.key))

	return [...orderedProps, ...restProps]
}