const axios = require('axios');
const moment = require('moment');
axios
    .get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson')
    .then(response => {
        const data = response.data;
        data.features && Array.isArray(data.features);
        console.log('USGS Earthquakes in the Last Hour');
        console.log(`Total: ${data.features.length}`);
        console.log('==============================');
        data.features.forEach(earthquake => {
            const properties = earthquake.properties;
            console.log(`
          M ${properties.mag} - ${properties.place}
          Fecha: ${moment(properties.time).format('M/D/YYYY, h:mm:ss A')}
          Info: ${properties.url}
          Detalles: ${properties.detail}
          ==============================
          `);
        });
    })
    .catch(error => {
        console.error('La llamada a la api fallo:', error);
    });
