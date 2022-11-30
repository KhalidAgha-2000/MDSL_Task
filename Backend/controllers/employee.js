const employeeModel = require('../Models/employee')


class Controller {

    addEmployee(req, res, next) {
        let employee = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile
        }
        employeeModel.create(employee)
            .then(() => res.status(200)
                .json({ status: 200, message: 'Employee Created Successfully !', data: employee }))
    }

    getEmployees(req, res, next) {
        employeeModel.find()
            .then(response => res.status(200).json({ success: true, message: "Employees", data: response }))
    }

    deleteEmployee(req, res, next) {
        let { id } = req.params
        employeeModel.deleteOne({ _id: id }, (err, response) => {
            res.status(200).json({ success: true, message: "Employee`s Data Successfully Deleted !", data: response })
        })
    }

}
module.exports = new Controller();
