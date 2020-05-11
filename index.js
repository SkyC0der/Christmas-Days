const days = ['', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth',
		'ninth', 'tenth', 'eleventh', 'twelfth'],
gifts = ['', 'a Partridge in a Pear Tree.\n', 'two Turtle Doves, and ', 'three French Hens, ',
		'four Calling Birds, ', 'five Gold Rings, ', 'six Geese-a-Laying, ', 'seven Swans-a-Swimming, ',
		'eight Maids-a-Milking, ', 'nine Ladies Dancing, ', 'ten Lords-a-Leaping, ',
		'eleven Pipers Piping, ', 'twelve Drummers Drumming, ']

class TwelveDays {

	sing() {
		return this.verse(1, 12)
	}

	verse(from, to=from) {
		return [...Array(to+1).keys()].slice(from, to+1)
				.map(i => this.sentence(i))
				.join('\n')
	}

	sentence(no) {
		return 'On the ' +days[no] +' day of Christmas my true love gave to me: '
				+gifts.filter((_, i) => i <= no).reverse().join('')
	}
}

  module.exports = TwelveDays;