import express from 'express';
import constants from '../common_constants';

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
	
	if ( author.indexOf(constants.ACCEPTABLE_LANGUAGES[lang]) !== -1 )
	{
		var data = require('../'+lang+'/'+author);
		// console.log("chapter",chapter);
		// console.log("chapter+1",chapter+1);
		// var json = data.quran.sura[chapter][chapter+1][1];
		var json = [];
		for (var i = start - 1; i < end; i++) {
			
			if ( data.quran.sura[chapter-1][chapter][i])
			{
				json.push(data.quran.sura[chapter-1][chapter][i]);
			}
		}
		
		res.send({data:json});
	}
	else
	{
		res.send({data:['failure']});
	}
});

router.get('/random/:lang?/:author?',(req,res) => 
{
	let lang = (req.params.lang) || '';
	let author = (req.params.author) || '';
	console.log(lang);
	console.log(author);
	if ( author.indexOf(constants.ACCEPTABLE_LANGUAGES[lang]) !== -1 )
	{
		var data = require('../'+lang+'/'+author);
		let chapter = Math.floor((Math.random() * 114) + 1);
		let len = (data.quran.sura[chapter-1][chapter]).length;
		let start = Math.floor(Math.random() * len  + 1);
		console.log(chapter);
		console.log(start);
		console.log(len);
		// console.log((data.quran.sura[chapter-1][chapter]).length);
		// console.log("chapter",chapter);
		// console.log("chapter+1",chapter+1);
		// var json = data.quran.sura[chapter][chapter+1][1];
		var json = [];
		for (var i = start - 1; i < start; i++) {
			
			if ( data.quran.sura[chapter-1][chapter][i])
			{
				let jsonArray = {
					'text': data.quran.sura[chapter-1][chapter][i].text,
					'chapter': chapter,
					'verse_number': i + 1
				}
				json.push(jsonArray);
			}
		}
		
		res.send({data:json});
	}
	else
	{
		res.send({data:['failure']});
	}
});




export default router;