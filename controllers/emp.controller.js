const mongoose = require('mongoose');
let employeeModel = require('../models/employee.model');
//let employeeModel = mongoose.model('edata');
var models = {
    /***************************************************/
    /*List : to show all documents in the data base    */
    /*                                                 */
    /***************************************************/

    list: (req, res) => {
        employeeModel.find((error, emplist) => {
            if (error) {
                return res.status(500).json({
                    message: "Error while finding employees",
                    Error: error
                });
            }
            return res.json(emplist)
        });
    },
    /***************************************************/
    /*create : to create new document in the data base */
    /*                                                 */
    /***************************************************/
    create: (req, res) => {
        var emp = new employeeModel({
            name: req.body.name,
            eid: req.body.eid,
            designation: req.body.designation,
            jobDescription: req.body.jd
        });
        emp.save((error, empdata) => {
            if (error) {
                return res.status(500).json({
                    message: "Error while creating new record",
                    Error: error
                });
            }
            return res.json({
                message: "employee created with data below",
                emp: empdata
            });
        });
    },
    /***************************************************/
    /*update : to update existing document using eid   */
    /*                                                 */
    /***************************************************/
    update: (req, res) => {
        let id = req.params.eid;

        employeeModel.findOneAndUpdate(
            { eid: id }, {
                $set:
                    { designation: req.body.designation, jobDescription: req.body.jd }
            },
            (error, staus) => {
                if (error) {
                    return res.status(500).json({
                        message: "error while updating document",
                        error: error
                    });
                }
                // Verify if user updated or not
                employeeModel.findOne({ eid: id }, (error, emp) => {
                    if (error) {
                        return res.status(500).json({
                            message: "error while retriving updated data"
                        });
                    }

                    return res.json({
                        message: "Document updated successfully",
                        updateddata: emp
                    });

                });
            })
    },
    /******************************************************/
    /*delete : To remove document from database using eid */
    /*                                                    */
    /******************************************************/
    delete: (req, res) => {
        employeeModel.deleteOne({ eid: req.params.eid }, (error, success) => {
            if (error) {
                return res.status(500).json({
                    message: "Error while deleting employee",
                    Error: error
                });
            }
            return res.status(200).json({
                Message: "document deleted successfully"
            });
        });
    }

}

module.exports = models;