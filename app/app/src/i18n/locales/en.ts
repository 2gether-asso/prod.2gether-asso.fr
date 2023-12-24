const defaultLocale =
[
	'What is {0}?',
	'Subscribe on YouTube',
	'Visit our website',
	'Join our Discord',
	'2GETHER wishes to offer you more worked content and therefore sets up a new YouTube channel: 2GETHER PROD!',
	'On the agenda: popularization videos, short films, and many other surprises!',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
