const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500
    res.status(statusCode).res.json({
        message: err.message,
        stach: process.env.NODE_ENV === 'developement' ? err.stack : null
    });
}

module.exports = errorHandler