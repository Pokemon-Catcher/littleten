'use strict';

exports.BattleFormats = {
	leaders: {
		inherit:true,
		effectType: 'ValidatorRule',
		name: 'Leaders',
		onValidateTeam: function (team) {
			let typeTable;
			let leadersTable={
				onix: 'Rock Slide',
				starmie: 'Water Pulse',
				raichu: 'Shock Wave',
				vileplume: 'Giga Drain',
				venomoth: 'Poison Jab',
				alakazam: 'Skill Swap',
				arcanine: 'Overheat',
				rhyperior: 'Earthquake',
				pidgeot: 'Roost',
				scizor: 'U-Turn',
				miltank: 'Attract',
				gengar: 'Shadow Ball',
				poliwrath: 'Focus Punch',
				steelix: 'Iron Tail',
				mamoswine: 'Hail',
				kingdra: 'Dragon Pulse',
				probopass: 'Rock Tomb',
				hariyama: 'Bulk Up',
				manectric: 'Volt Switch',
				torkoal: 'Overheat',
				slaking: 'Retaliate',
				altaria: 'Roost',
				solrock: 'Calm Mind',
				lunatone: 'Calm Mind',
				rampardos: 'Stealth Rock',
				roserade: 'Grass Knot',
				lucario: 'Drain Punch',
				floatzel: 'Brine',
				mismagius: 'Shadow Claw',
				bastiodon: 'Flash Cannon',
				froslass: 'Avalanche',
				electivire: 'Charge Beam',
				stoutland: 'Work Up',
				scolipede: 'Venoshock',
				leavanny: 'Struggle Bug',
				zebstrika: 'Volt Switch',
				excadrill: 'Bulldoze',
				swanna: 'Acrobatics',
				haxorus: 'Dragon Tail',
				jellicent: 	'Scald',
				vivillon: 'Infestation',
				tyrantrum: 'Rock Tomb',
				lucario: 'Power-Up Punch',
				gogoat: 'Grass Knot',
				heliolisk: 'Thunderbolt',
				sylveon: 'Dazzling Gleam',
				meowsticf: 'Calm Mind',
				avalugg: 'Ice Beam',
			};
			let hasPokemon=false;
			let sig;
			let move;
			let hasMoves=0;
			let hasTypes=true;
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species);
				for(let pok in leadersTable)
				{
					if(pok==template.speciesid) 
					{
						hasPokemon=true;
						sig=pok;
						move=this.getMove(leadersTable[pok]);
						break;
					}
				}
				if(hasPokemon) break;
			};
			if(!hasPokemon) return ['You have no signature pokemons'];
			
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species);
				for(let m in team[i].moves)
				{
					
					if(team[i].moves[m]==move.id) 
					{
						hasMoves++;
					}
				}
				if(!template.types.includes(move.type)) hasTypes=false;
			};
			if(!hasTypes) return ['You have pokemon that has no required type - '+move.type];
			if(hasMoves<2) return ['You have no required TM moves - '+move.name];
		},
	},
	}

