import constants from '../common_constants';

function get(lang,author,chapter,start,end)
{
	var json = [];
	if ( author.indexOf(constants.ACCEPTABLE_LANGUAGES[lang]) !== -1 )
	{
		var data = require('../'+lang+'/'+author);
		// console.log("chapter",chapter);
		// console.log("chapter+1",chapter+1);
		// var json = data.quran.sura[chapter][chapter+1][1];
		for (var i = start - 1; i < end; i++) 
		{
			
			if ( data.quran.sura[chapter-1][chapter][i])
			{
				json.push(data.quran.sura[chapter-1][chapter][i]);
			}
		}
		return json;
	}
}

export default function getVerse(lang,author,chapter,start,end) 
{
	return get(lang,author,chapter,start,end);
}