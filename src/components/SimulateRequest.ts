export const sendData = async (method: string, data: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Promise.resolve(JSON.stringify(data)))
        }, 800)
    })
}