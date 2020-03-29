exports.sayHi = (req, res) => {
    res.json(
        {
            message: 'hi from controller'
        }
    );
}