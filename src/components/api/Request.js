export const request = (
    endpoint,
    { fields, filters, order, options, paging = false }
) => {
    let url = `${endpoint}`

    if (fields) url += `&fields=${fields}`
    if (filters) url += `&filter=${filters}`
    if (order) url += `&order=${order}`
    if (options) url += `&${options.join('&')}`
    return url
}