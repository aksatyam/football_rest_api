const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;
let URL = `https://apiv2.apifootball.com?APIkey=9bb66184e0c8145384fd2cc0f7b914ada57b4e8fd2e4d6d586adcc27c257a978&`
const getFootballData = async (req, res) => {
    const { query } = req;
    if (Object.keys(query).length) {
        Object.keys(query).forEach(key => {
            URL = `${URL}${key}=${query[key]}&`;
        })
        console.log(URL)
        return fetch(URL, {
            method: 'GET',
            query: query,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(json => {
                return res.status(200).json(json);
            });
    } else
        return res.status(500).json({ message: 'Invalid request', version: '1.0.0', date: '01 May 2021' })
}

module.exports = { getFootballData }