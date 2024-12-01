const onConnect = () => {
    console.log("Connected!")
}

const onDisconnect = () => {
    console.log("Disconnected!")
}

module.exports = {
    onConnect,
    onDisconnect
}