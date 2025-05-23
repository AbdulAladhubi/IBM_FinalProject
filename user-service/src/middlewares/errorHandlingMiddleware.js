const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'An internal server error occurred',
        data: {}
    });
};

module.exports = errorHandler;