// const sql = require('mssql');
const sql = require('mssql/msnodesqlv8');
const Enumerable = require('linq');

const config = {
    server: 'localhost',
    database: 'Namecheap_Core',
    user: 'sa',
    password: '1234567890-=q'
};

const cred = {
    driver: 'msnodesqlv8',
    server: 'localhost',
    database: 'Namecheap_Core',
    options: {
        trustedConnection: true,
    }
};

const cred1 = {
    driver: 'msnodesqlv8',
    connectionString: 'Driver={SQL Server Native Client 11.0};Server=(local);Database=Namecheap_Core;Trusted_Connection=yes',
};

function loadData() {
    // var dbConn = new sql.ConnectionPool(config);
    var dbConn = new sql.ConnectionPool(cred1);

    // dbConn.connect().then(() = > console.log(Ok)).catch(()=>console.log('Error'));
    dbConn.connect().then(function () {
       // console.log('Ok !!!');
        var request = new sql.Request(dbConn);
        request.query('select * from [TBL_DOMAIN]', (err, result) => {
            // ... error checks
            if (err) {
                console.log(err);

                return;
            }

            // console.log(result.recordsets[0].length);
            var dataset = result.recordsets[0];
            console.log(dataset.filter(x => x.UserName === 'apitestuser'));

        })
    }).catch((err) => console.log(err));

    // dbConn.connect().then(function () {
    // var request = new sql.Request(dbConn);
    //     request.query("select * from EmployeeInfo").then(function (recordSet) {
    //         console.log(recordSet);
    //         dbConn.close();
    //     }).catch(function (err) {
    //         console.log(err);
    //         dbConn.close();
    //     });
    // }).catch(function (err) {
    //     console.log(err);
    // });
}

loadData();
// console.log('1231231231');
