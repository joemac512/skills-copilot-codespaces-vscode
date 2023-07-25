// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Import models
const Comment = require('../models/Comment');
const User = require('../models/User');
const Post = require('../models/Post');

// Import middleware
const auth = require('../middleware/auth');




