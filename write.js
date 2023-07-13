const Aerospike = require('aerospike')

let client = Aerospike.client({
    hosts: [
        { addr: "localhost", port:3000 },


    ],
    log: {
        level: Aerospike.log.INFO
    }
})



client.connect(function (error) {
    if (error) {
        // handle failure
        console.log('Connection to Aerospike cluster failed!')
    } else {
        // handle success



        const key = new Aerospike.Key('test', 'books', '1000')

// Record to be written to the database
        let bins = {


            uid:     1000,
            name:    'Ryan Holiday',
            book: "Ego is the Enemy",

        }





        client.put(key, bins, function (error) {
            if (error) {
                console.log('error: %s', error.message)
            } else {
                console.log('Record written to database successfully.')

            }
            client.close()
        })
    }

})


