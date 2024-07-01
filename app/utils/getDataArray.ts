

// Sets fetched data to state
export const getDataArray = async (setStateFunc:any, fetchFunc:any, funcArgs?:any) => {


    const response = await fetchFunc(...funcArgs)
    console.log('response in getDataArray:', response)
    setStateFunc(response)


}