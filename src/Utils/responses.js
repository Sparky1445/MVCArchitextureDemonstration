

export const errorResponse = (error, res) => {
    console.log(error);
    if (error.status) {
        return res.status(error.status).json({
            success: false,
            error: error.message
        });
    }
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"

    });
}

export const successResponse = (statusCode, data, message, res) => {
    return res.status(statusCode).json({
        success: true,
        data,
        message
    });
}