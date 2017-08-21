import express from 'express';
import constants from '../common_constants';

import getVerse from './getVerse'
const router = express.Router();


router.get('/quran/:lang?/:author?/:chapter?/:start?/:end?',(req,res) => 
{
	let lang = (req.params.lang) || '';
	let author = (req.params.author) || '';
	let chapter = Number(req.params.chapter) || 0;
	let start = Number(req.params.start) || 1;
	let end = Number(req.params.end) || 1;

	if ( start > end )
	{
		end = start;
	}
	let json = getVerse(lang,author,chapter,start,end);
	res.send({data:json});
});

router.get('/random/:lang?/:author?',(req,res) => 
{
	let lang = (req.params.lang) || '';
	let author = (req.params.author) || '';
	let chapter = Math.floor((Math.random() * 114) + 1);
	let data = require('../'+lang+'/'+author);
	let len = (data.quran.sura[chapter-1][chapter]).length;
	let start = Math.floor(Math.random() * len  + 1);

	let json = getVerse(lang,author,chapter,start,start);
	console.log(json);
	res.send({data:json});
});




export default router;