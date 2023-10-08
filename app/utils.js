//This function returns the shared items between list1 and list2
export const intersection = (list1, list2) => {
    return list1.filter(item => list2.indexOf(item) !== -1)
    
}

//This functions returns only the unique items in list1 which list2 doesn't have.
export const unique = (list1, list2) => {
    return list1.filter(item => list2.indexOf(item) === -1)
    
}