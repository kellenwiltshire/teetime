import { defineStore } from 'pinia';

const testGolfers = [
	{ name: 'Player One', carpool: '', restriction: false },
	{
		name: 'Player Two',
		carpool: 'Player Nine',
		restriction: false,
	},
	{ name: 'Player Three', carpool: '', restriction: false },
	{ name: 'Player Four', carpool: '', restriction: true },
	{
		name: 'Player Five',
		carpool: 'Player Thirteen',
		restriction: false,
	},
	{ name: 'Player Six', carpool: '', restriction: false },
	{ name: 'Player Seven', carpool: '', restriction: false },
	{ name: 'Player Eight', carpool: '', restriction: false },
	{
		name: 'Player Nine',
		carpool: 'Player Two',
		restriction: false,
	},
	{ name: 'Player Ten', carpool: '', restriction: true },
	{ name: 'Player Eleven', carpool: '', restriction: false },
	{ name: 'Player Twelve', carpool: '', restriction: false },
	{
		name: 'Player Thirteen',
		carpool: 'Player Five',
		restriction: false,
	},
	{ name: 'Player Fourteen', carpool: '', restriction: false },
	{ name: 'Player Fifteen', carpool: '', restriction: false },
	{ name: 'Player Sixteen', carpool: '', restriction: false },
	{ name: 'Player Seventeen', carpool: '', restriction: false },
	{ name: 'Player Eighteen', carpool: '', restriction: true },
	{ name: 'Player Nineteen', carpool: '', restriction: false },
	{ name: 'Player Twenty', carpool: '', restriction: false },
	{ name: 'Player Twentyone', carpool: '', restriction: false },
	{ name: 'Player Twentytwo', carpool: '', restriction: false },
	{
		name: 'Player Twentythree',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player TwentyFour', carpool: '', restriction: true },
	{
		name: 'Player TwentyFive',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player TwentySix', carpool: '', restriction: false },
	{
		name: 'Player TwentySeven',
		carpool: '',
		restriction: false,
	},
	{
		name: 'Player TwentyEight',
		carpool: '',
		restriction: false,
	},
	{
		name: 'Player TwentyNine',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player Thirty', carpool: '', restriction: false },
	{ name: 'Player ThirtyOne', carpool: '', restriction: false },
	{ name: 'Player ThirtyTwo', carpool: '', restriction: true },
	{
		name: 'Player ThirtyThree',
		carpool: '',
		restriction: false,
	},
	{
		name: 'Player ThirtyFour',
		carpool: '',
		restriction: false,
	},
	{
		name: 'Player ThirtyFive',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player ThirtySix', carpool: '', restriction: false },
	{
		name: 'Player ThirtySeven',
		carpool: '',
		restriction: false,
	},
	{
		name: 'Player ThirtyEight',
		carpool: '',
		restriction: true,
	},
	{
		name: 'Player ThirtyNine',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player Forty', carpool: '', restriction: false },
	{ name: 'Player FortyOne', carpool: '', restriction: false },
	{ name: 'Player FortyTwo', carpool: '', restriction: false },
	{
		name: 'Player FortyThree',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player FortyFour', carpool: '', restriction: false },
	{ name: 'Player FortyFive', carpool: '', restriction: false },
	{ name: 'Player FortySix', carpool: '', restriction: true },
	{
		name: 'Player FortySeven',
		carpool: '',
		restriction: false,
	},
	{
		name: 'Player FortyEight',
		carpool: '',
		restriction: false,
	},
	{ name: 'Player FORTYNINE', carpool: '', restriction: false },
	{ name: 'Player FIFTY', carpool: '', restriction: false },
	{ name: 'Player FIFTYONE', carpool: '', restriction: false },
	{ name: 'Player FIFTYTWO', carpool: '', restriction: true },
	{
		name: 'Player FIFTYTHREE',
		carpool: '',
		restriction: false,
	},
];

interface Golfer {
	name: string;
	restriction: boolean;
	carpool: string;
}

export const golferStore = defineStore('golfers', {
	state: () => ({
		listOfGolfers: testGolfers,
	}),
	getters: {
		getGolfers(state) {
			return state.listOfGolfers;
		},
	},
	actions: {
		addGolfer(newGolfer: Golfer) {
			this.listOfGolfers.push(newGolfer);
		},
	},
});
