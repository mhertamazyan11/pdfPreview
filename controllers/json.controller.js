module.exports = {};
var basePath = 'https://pdf-demo.herokuapp.com/images/';

module.exports.getJson = function(req,res){
	jsonData ={
		'data':[
		{
			
			'country':'Armenia',
			'lat':40.0652137,
			'lon':43.9194952,
			'imageData':[
				{
					'url':basePath+'1.jpg',
					'title':'Baker Of The World',
					'date':'02.06.2015',
					'auther':'Vicki	Palmer',
				},
				{
					'url':basePath+'2.jpg',
					'title':'Cyborg Of Wood',
					'date':'02.08.2017',
					'auther':'Vicki	Palmer',
				},
				{
					'url':basePath+'3.jpg',
					'title':'Spiders Without Desire',
					'date':'05.06.2017',
					'auther':'Vicki	Palmer',
				}
			]
		}

		,
		{
			
			'country':'America (USA)',
			'lat':36.2069006,
			'lon':-113.74615,
			'imageData':[
				{
					'url':basePath+'4.jpg',
					'title':'Thieves Of The Ancients',
					'date':'02.06.2017',
					'auther':'Fannie	Morris',
				},
				{
					'url':basePath+'5.jpg',
					'title':'Spire Of Dream',
					'date':'02.10.2017',
					'auther':'Fannie	Morris',
				},
				{
					'url':basePath+'6.jpg',
					'title':'Doom Of The Plague',
					'date':'02.06.2016',
					'auther':'Christina	Leonard',
				},
				{
					'url':basePath+'7.jpg',
					'title':'Going To The Mist',
					'date':'12.06.2017',
					'auther':'Donna	Schwartz',
				},
				{
					'url':basePath+'8.jpg',
					'title':'Searching For The River',
					'date':'02.11.2017',
					'auther':'Gene	Fuller',
				},
				{
					'url':basePath+'9.jpg',
					'title':'Bleeding At The Country',
					'date':'22.06.2017',
					'auther':'Gene	Fuller',
				},
				{
					'url':basePath+'10.jpg',
					'title':'Success Of Silver',
					'date':'02.06.2012',
					'auther':'Donna	Schwartz',
				}
			]

		},
		{
			
			'country':'Great Britain',
			'lat':53.981331,
			'lon':-11.1991388,
			'imageData':[
				{
					'url':basePath+'11.jpg',
					'title':'Doctors And Bandits',
					'date':'12.8.2017',
					'auther':'Wilson	Freeman',
				},
				{
					'url':basePath+'12.jpg',
					'title':'Knights And Enemies',
					'date':'02.06.2015',
					'auther':'Christina	Leonard',
				},
				{
					'url':basePath+'13.jpg',
					'title':'Serpents Of The Stars',
					'date':'02.04.2017',
					'auther':'Wilson	Freeman',
				}
			]

		},
		{
			
			'country':'Germany',
			'lat':51.0782363,
			'lon':5.9668561,
			'imageData':[
				{
					'url':basePath+'14.jpg',
					'title':'Heroes Of The River',
					'date':'15.06.2017',
					'auther':'Rachael	Soto',
				},
				{
					'url':basePath+'15.jpg',
					'title':'Lion Of Nightmares',
					'date':'16.06.2017',
					'auther':'Jerry	Robbins',
				}
			]

		},
		{
			
			'country':'Finland',
			'lat':64.6473199,
			'lon':17.1342607,
			'imageData':[
				{
					'url':basePath+'16.jpg',
					'title':'Curse Of The Sea',
					'date':'05.06.2016',
					'auther':'Rachael	Soto',
				}
			]

		},
		{
			
			'country':'Brazil',
			'lat':-13.5383224,
			'lon':-69.8245774,
			'imageData':[
				{
					'url':basePath+'17.jpg',
					'title':'Call To The Fires',
					'date':'02.09.2017',
					'auther':'Glenn	Owen',
				},
				{
					'url':basePath+'18.jpg',
					'title':'Lion Of Nightmares',
					'date':'02.09.2016',
					'auther':'Glenn	Owen',
				}
			]

		},
		{
			
			'country':'Argentina',
			'lat':-37.0177358,
			'lon':-81.6653837,
			'imageData':[
				{
					'url':basePath+'19.jpg',
					'title':'Cats And Gods',
					'date':'02.06.2017',
					'auther':'Amanda	Powell',
				}
			]

		},
		{
			
			'country':'Australia',
			'lat':-21.1386697,
			'lon':95.2814863,
			'imageData':[
				{
					'url':basePath+'20.jpg',
					'title':'Heroes And Pilots',
					'date':'04.06.2017',
					'auther':'Seth	Rice',
				},
				{
					'url':basePath+'21.jpg',
					'title':'Owls Without Fear',
					'date':'05.06.2017',
					'auther':'Seth	Rice',
				},
				{
					'url':basePath+'22.jpg',
					'title':'Boy Of Despair',
					'date':'06.06.2017',
					'auther':'Lori	Pearson',
				},
				{
					'url':basePath+'23.jpg',
					'title':'Turtles And Snakes',
					'date':'07.06.2017',
					'auther':'Seth	Rice',
				},
				{
					'url':basePath+'24.jpg',
					'title':'Descendants And Giants',
					'date':'08.06.2017',
					'auther':'Lori	Pearson',
				},
				{
					'url':basePath+'25.jpg',
					'title':'Bathing In Time',
					'date':'08.06.2017',
					'auther':'Mildred	Park',
				}
			]

		},
		{
			
			'country':'Canada',
			'lat':50.8062034,
			'lon':-130.1866015,
			'imageData':[
				{
					'url':basePath+'26.jpg',
					'title':'Boy Of Despair',
					'date':'10.06.2017',
					'auther':'Caroline	Reeves',
				}
			]

		},
		{
			
			'country':'China',
			'lat':34.4904967,
			'lon':86.0262824,
			'imageData':[
				{
					'url':basePath+'27.jpg',
					'title':'Whispers In The East',
					'date':'11.06.2017',
					'auther':'Mildred	Park',
				},
				{
					'url':basePath+'28.jpg',
					'title':'Fruit Of The Light',
					'date':'12.06.2017',
					'auther':'Lula	Howell',
				}
			]

		},
		{
			
			'country':'Democratic Republic of the Congo',
			'lat':-3.983381,
			'lon':12.6721949,
			'imageData':[
				{
					'url':basePath+'29.jpg',
					'title':'Honor Of The East',
					'date':'02.01.2017',
					'auther':'Tommy	Hawkins',
				}
			]

		},
		{
			
			'country':'Egypt',
			'lat':26.764411,
			'lon':26.2991004,
			'imageData':[
				{
					'url':basePath+'30.jpg',
					'title':'Dogs And Phantoms',
					'date':'02.02.2017',
					'auther':'Erick	Wade',
				},
				{
					'url':basePath+'31.jpg',
					'title':'Children And Robots',
					'date':'02.04.2017',
					'auther':'Erick	Wade',
				},
				{
					'url':basePath+'32.jpg',
					'title':'Spies With Money',
					'date':'02.06.2017',
					'auther':'Erick	Wade',
				}
			]

		},
		{
			
			'country':'France',
			'lat':45.862684,
			'lon':-6.7739037,
			'imageData':[
				{
					'url':basePath+'33.jpg',
					'title':'Body With Sins',
					'date':'02.06.2017',
					'auther':'Thelma	Crawford',
				},
				{
					'url':basePath+'34.jpg',
					'title':'Wives Of Dusk',
					'date':'02.06.2017',
					'auther':'Byron	Moody',
				}
			]

		},
		{
			
			'country':'India',
			'lat':20.1462096,
			'lon':64.4400962,
			'imageData':[
				{
					'url':basePath+'35.jpg',
					'title':'Harmony Of Hope',
					'date':'02.06.2017',
					'auther':'Katrina	Lowe',
				}
			]

		},
		{
			
			'country':'China',
			'lat':34.4904967,
			'lon':86.0262824,
			'imageData':[
				{
					'url':basePath+'36.jpg',
					'title':'Gods Of Hell',
					'date':'02.06.2017',
					'auther':'Irvin	Terry',
				},
				
				{
					'url':basePath+'37.jpg',
					'title':'Assassin Of Glory',
					'date':'15.06.2017',
					'auther':'Margarita	Stone',
				}
			]

		},
		{
			
			'country':'Japan',
			'lat':33.429336,
			'lon':116.2445567,
			'imageData':[
				{
					'url':basePath+'38.jpg',
					'title':'Phantom Of Earth',
					'date':'02.06.2017',
					'auther':'Elsie	Sherman',
				}
			]

		}
	]
	};

	res.json(jsonData);
}