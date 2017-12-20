var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

var crud = {
    show: (req, res) => {
        con.query('SELECT * FROM edata', (error, rows) => {
            if (error) {
                return res.status(500).json({
                    Message: "Error while retriving records form My SQL DB",
                    Error: error
                });
            }
            return res.status(200).json(rows);
        })
    },
    create: (req, res) => {
        emp = { eid: req.body.eid, ename: req.body.ename, designation: req.body.designation, jobdescription: req.body.jobdescription }
        con.query('INSERT INTO edata SET?', emp, (error, data) => {
            if (error) {
                return res.status(500).json({
                    Message: "Error while creating new employee",
                    Error: error
                });
            }
            return res.status(200).json({
                Message: "New Employee created successfully!!"
            });
        })
    },
    update: (req, res) => {
        eid = req.params.eid;
        con.query("UPDATE edata SET jobdescription? Where eid?", [req.body.jobdescription, eid], () => {
            if (error) {
                return res.status(500).json({
                    Message: "Error in updating requested record",
                    Error: error
                });
            }
            return res.status(200).json({
                Message: "Requested data updated successfully"
            });

        })
    },
    delete: (req, res) => {
        eid = req.params.eid;
        con.query('DELETE FROM edata WHERE eid?', [eid], (error, data) => {
            if (error) {
                return res.status(500).json({
                    Message: `Error while deleting requested data`,
                    Error: error
                });
            }
            return res.status(200).json({
                Message: `Requested record deleted successfully`
            });
        })
    }
}
//con.end();  
module.exports = crud;
