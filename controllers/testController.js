const testUserController = (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "test User data API",
        });
    } catch (error) {
        console.log(`error in test API : `, error);
    }
};

// export
module.exports = {testUserController};