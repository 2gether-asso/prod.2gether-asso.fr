import type { I18n, Diff } from '../type'

const locale =
{
	'What is {0}?': 'Qu\'est-ce que {0} ?',
	'Subscribe on YouTube': 'Abonne-toi sur YouTube',
	'Visit our website': 'Visite notre site web',
	'Join our Discord': 'Rejoins notre Discord',
	'2GETHER wishes to offer you more worked content and therefore sets up a new YouTube channel: 2GETHER PROD!':
		'2GETHER souhaite vous proposer des contenus plus travaillés et met donc en place une nouvelle chaine YouTube : 2GETHER PROD !',
	'On the agenda: popularization videos, short films, and many other surprises!':
		'Au programme : des vidéos de vulgarisations, des courts métrages, et pleins d\'autres surprises !',
} as const

// Static type check
export default locale satisfies
	// Check for missing keys:
	Readonly<Record<Diff<keyof I18n, keyof typeof locale>, string>> &
	// Check for extra keys:
	Readonly<Record<Diff<keyof typeof locale, keyof I18n>, never>>
