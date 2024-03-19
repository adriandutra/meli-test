const errorHandler = (err, req, res, next) => {
    console.log("Error handler -> ");
    console.log(err);
    return res.status(500).json({ error: err });
};

export default errorHandler;
