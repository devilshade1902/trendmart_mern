const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // <-- ADD THIS LINE
const User = require('../models/User');