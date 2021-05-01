const express = require('express')

module.exports = {
    getTestFunction: (req, res) => {
        return res.status(200).json({ message: 'Football API', version: '1.0.0', date: '01 May 2021' });
    }
}