export default (req, res, next) => {
    console.log('log middleware:', req.url)
    next()
}