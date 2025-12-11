const validate = (schema) => {

    // Returns a validating middleware
    return async (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            return res.status(400).json({
                error: error.message,
                success: false,
                message: "Validation failed!"
            });
        }
    }
}

export default validate;